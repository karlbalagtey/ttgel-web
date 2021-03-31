import {
  take,
  call,
  all,
  put,
  select,
  takeLatest,
  fork,
  cancel,
  cancelled,
} from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { snackbarActions } from 'app/components/SnackBar/slice';
import { selectUser } from './selectors';
import { authenticate } from './api';
import { handleError } from 'utils/handle-error';

function* logout() {
  try {
    console.log('logout');
    yield localStorage.removeItem('auth');
    yield localStorage.removeItem('user');
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

function* login() {
  try {
    const { email, password } = yield select(selectUser);
    const { data } = yield call(authenticate, email, password);

    const { token, user } = data;

    yield put(actions.setAuth(token));
    yield put(actions.success(user));

    localStorage.setItem('auth', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));

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
    // if our forked task was cancelled
    // redirect to login
    if (yield cancelled()) {
      yield call(logout);
    }
  }
}

export function* loginWatcher() {
  while (true) {
    // when the generator sees this action it will pull the payload
    // loop moves forward only after this
    const { email, password } = yield take(actions.login);
    // fork does not block the loop so it moves forward while in the background
    const task = yield fork(login, email, password);
    const action = yield take([actions.logout, actions.error]);
    if (action.type === actions.logout.type) yield cancel(task);
    yield call(logout);
  }
}

export function* onLogin() {
  yield takeLatest(actions.login.type, login);
}

export function* onWatch() {
  yield takeLatest(actions.watchAuth.type, loginWatcher);
}

export function* onLogout() {
  yield takeLatest(actions.logout.type, logout);
}

export function* loginSaga() {
  yield all([call(onLogin), call(onWatch), call(onLogout)]);
}
