import {
  take,
  call,
  all,
  put,
  takeLatest,
  race,
  fork,
  delay,
  cancelled,
  cancel,
} from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { snackbarActions } from 'app/components/SnackBar/slice';
import { authenticate, signOut, refreshToken } from './api';
import { handleError } from 'utils/handle-error';

function* logout() {
  try {
    yield call(signOut);
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

function* refreshTokenOnExpiry(token) {
  let newToken = token;
  while (true) {
    try {
      const timeNow = parseInt(Date.now().valueOf() / 1000); //unix format
      const expInSec = newToken.expires - timeNow;
      const expInMil = expInSec * 1000; // ms
      const tenSeconds = expInMil - 50000; // for testing

      yield delay(tenSeconds);
      newToken = yield call(refreshToken);
    } catch (error) {
      const errorMessage = handleError(error);
      yield put(actions.reset());
      // yield call(logout, errorMessage);
      yield put(actions.error(errorMessage));
    } finally {
      if (yield cancelled()) {
        console.log('refresh cancelled');
        yield cancel(newToken);
      }
    }
  }
}

function* login({ email, password }) {
  let task;
  try {
    const { user, token } = yield call(authenticate, email, password);
    task = yield fork(refreshTokenOnExpiry, token);
    yield put(actions.success(user));
    yield put(
      snackbarActions.notify({
        timeout: 3000,
        message: 'Welcome to the Training Ground',
        type: 'info',
        autoClose: true,
        position: 'top-center',
      }),
    );
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  } finally {
    if (yield cancelled()) {
      console.log('cancelled login');
      yield cancel(task);
    }
  }
}

export function* watchAuth() {
  while (true) {
    const { payload } = yield take(actions.login);
    yield fork(login, payload);
    yield race([take(actions.logout), take(actions.error)]);
  }
}

export function* onWatch() {
  yield takeLatest(actions.watchAuth.type, watchAuth);
}

export function* onLogout() {
  yield takeLatest(actions.logout.type, logout);
}

export function* loginSaga() {
  yield all([call(onWatch), call(onLogout)]);
}
