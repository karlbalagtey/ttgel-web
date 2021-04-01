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
import { authenticate } from './api';
import { handleError } from 'utils/handle-error';
import { delay } from './api';
import { useSelector } from 'react-redux';
import { selectUser } from './selectors';

function* logout() {
  try {
    yield localStorage.removeItem('user');
    yield localStorage.removeItem('auth');
    yield put(
      snackbarActions.notify({
        timeout: 3000,
        message: 'Logged out',
        type: 'info',
        autoClose: true,
        position: 'top-center',
      }),
    );
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

function* login({ email, password }) {
  console.log(email, password);
  try {
    const { user, token } = yield call(authenticate, email, password);
    yield put(actions.success(user));
    console.log(token);
    const expInMS = token.expires * 1000;
    console.log(expInMS);

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('auth', JSON.stringify(token));

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
