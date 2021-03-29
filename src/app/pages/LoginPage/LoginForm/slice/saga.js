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
  yield put(actions.unsetClient());

  localStorage.removeItem('token');

  // redirect
}

function* login() {
  try {
    const { email, password } = yield select(selectUser);
    const { data } = yield call(authenticate, email, password);
    console.log(data);
    const { token, user } = data;

    yield put(actions.setClient(token));
    yield put(actions.success(user));

    localStorage.setItem('token', JSON.stringify(token));
    yield put(
      snackbarActions.notify({
        timeout: 3000,
        message: 'Welcome',
        type: 'info',
        autoClose: true,
        position: 'bottom-right',
      }),
    );
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  } finally {
    // if our forked task was cancelled
    // redirect to login
    if (yield cancelled()) {
      // history push login
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

export function* loginSaga() {
  yield all([call(onLogin), call(onWatch)]);
}
