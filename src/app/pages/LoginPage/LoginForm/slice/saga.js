import {
  take,
  call,
  all,
  put,
  takeLatest,
  race,
  fork,
  cancelled,
} from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { snackbarActions } from 'app/components/SnackBar/slice';
import { authenticate, signOut, refreshToken } from './api';
import { handleError } from 'utils/handle-error';
import { delay } from './util';

function* logout(msg) {
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
      yield call(delay, newToken);
      newToken = yield call(refreshToken);
    } catch (error) {
      const errorMessage = handleError(error);
      yield put(actions.reset());
      yield call(logout, errorMessage);
      yield put(actions.error(errorMessage));
    }
  }
}

function* login({ email, password }) {
  try {
    const { user, token } = yield call(authenticate, email, password);
    yield fork(refreshTokenOnExpiry, token);
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
      console.log('cancelled');
      yield call(logout);
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
