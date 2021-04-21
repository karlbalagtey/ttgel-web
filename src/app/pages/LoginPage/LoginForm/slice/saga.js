import {
  take,
  call,
  all,
  put,
  takeLatest,
  race,
  fork,
  delay,
  cancel,
  join,
  select,
} from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { snackbarActions } from 'app/components/SnackBar/slice';
import { authenticate, signOut, refreshToken } from './api';
import { handleError } from 'utils/handle-error';
import { selectExpiresIn } from './selectors';
import auth from './util';

function* refreshTokenOnExpiry(token = null) {
  while (true) {
    const createdAt = Math.round(Date.now().valueOf() / 1000);
    const expiresIn = yield select(selectExpiresIn);
    const expInSec = expiresIn - createdAt;
    const expInMil = expInSec * 1000; // ms
    const tenSeconds = expInMil - 50000; // for testing

    if (!token) {
      return;
    }

    console.log('refresh before delay');
    console.log(tenSeconds);
    yield delay(tenSeconds);
    console.log('after delay');
    yield put(actions.refreshStart());
    const { expires } = yield call(refreshToken);
    yield put(actions.refreshSuccess(expires));
  }
}

function* login({ email, password }) {
  try {
    const data = yield call(authenticate, email, password);

    yield put(actions.success(data));
    yield put(
      snackbarActions.notify({
        timeout: 3000,
        message: 'Welcome to the Training Ground',
        type: 'info',
        autoClose: true,
        position: 'top-center',
      }),
    );
    return data.token;
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

export function* watchAuth() {
  let storedToken = yield call(auth.getStoredToken);

  while (true) {
    if (!storedToken) {
      const { payload } = yield take(actions.login);
      storedToken = yield call(login, payload);
    }

    const refreshTokenTask = yield fork(refreshTokenOnExpiry, storedToken);

    const { signOutAction, refreshTokenLoop } = yield race({
      signOutAction: take(actions.logout),
      refreshTokenLoop: join(refreshTokenTask),
    });

    if (signOutAction) {
      yield call(signOut);
      yield cancel(refreshTokenLoop);
    }
  }
}

export function* loginSaga() {
  yield takeLatest(actions.watchAuth.type, watchAuth);
}
