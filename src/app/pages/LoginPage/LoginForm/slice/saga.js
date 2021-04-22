import {
  take,
  call,
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

export function* refreshTokenOnExpiry() {
  yield put(actions.refreshStart());
  const { expires } = yield call(refreshToken);
  yield put(actions.refreshSuccess(expires));
}

function* refreshTokenLoop(token = null) {
  while (true) {
    const createdAt = Math.round(Date.now().valueOf() / 1000);
    const expiresIn = yield select(selectExpiresIn);
    const expInSec = expiresIn - createdAt;
    const expInMil = expInSec * 1000; // ms
    const tenSeconds = expInMil - 50000; // for testing

    if (!token) {
      return;
    }

    yield delay(tenSeconds);
    yield call(refreshTokenOnExpiry);
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
    const errorMessage = yield call(handleError, error);

    if (errorMessage) {
      yield put(actions.error(errorMessage));
    }
  }
}

export function* watchAuth() {
  let storedToken = yield call(auth.getStoredToken);

  while (true) {
    if (!storedToken) {
      const { payload } = yield take(actions.login);
      storedToken = yield call(login, payload);
    }

    const refreshTokenTask = yield fork(refreshTokenLoop, storedToken);

    const { signOutAction, refreshTokenAction } = yield race({
      signOutAction: take(actions.logout),
      refreshTokenAction: join(refreshTokenTask),
    });

    if (signOutAction) {
      yield call(signOut);
      yield cancel(refreshTokenAction);
    }
  }
}

export function* loginSaga() {
  yield takeLatest(actions.watchAuth.type, watchAuth);
}
