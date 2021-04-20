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
  select,
} from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { snackbarActions } from 'app/components/SnackBar/slice';
import { authenticate, signOut, refreshToken } from './api';
import { handleError } from 'utils/handle-error';
import { selectExpiresIn, selectUser } from './selectors';
import auth from './util';

function* logout() {
  try {
    yield call(signOut);
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

// function* refreshTokenOnExpiry() {
//   while (true) {
//     const createdAt = Math.round(Date.now().valueOf() / 1000);
//     const expiresIn = yield select(selectExpiresIn);
//     const expInSec = expiresIn - createdAt;
//     const expInMil = expInSec * 1000; // ms
//     const tenSeconds = expInMil - 50000; // for testing

//     yield delay(tenSeconds);
//     yield put(actions.refreshStart());
//     yield call(refreshToken);
//     yield put(actions.refreshSuccess(expiresIn));
//   }
// }

// function* login({ email, password }) {
//   try {
//     const data = yield call(authenticate, email, password);
//     yield put(actions.success(data));
//     // yield fork(refreshTokenOnExpiry);
//     yield put(
//       snackbarActions.notify({
//         timeout: 3000,
//         message: 'Welcome to the Training Ground',
//         type: 'info',
//         autoClose: true,
//         position: 'top-center',
//       }),
//     );
//   } catch (error) {
//     const errorMessage = handleError(error);
//     yield put(actions.error(errorMessage));
//   }
// }

function* authorize() {
  try {
    const { email, password } = yield select(selectUser);
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
    return null;
  }
}

function* authorizeLoop(token) {
  while (true) {
    token = yield call(authorize);
    if (token == null) {
      return;
    }
    const createdAt = Math.round(Date.now().valueOf() / 1000);
    const expiresIn = yield select(selectExpiresIn);
    const expInSec = expiresIn - createdAt;
    const expInMil = expInSec * 1000; // ms
    const tenSeconds = expInMil - 50000; // for testing
    console.log(tenSeconds);
    yield delay(tenSeconds);
    yield put(actions.refreshStart());
    yield call(refreshToken);
    yield put(actions.refreshSuccess(expiresIn));
  }
}

export function* watchAuth() {
  const storedToken = yield call(auth.getStoredToken);

  while (true) {
    let task;
    if (!storedToken) {
      yield take(actions.login);
      task = yield fork(authorize);
    }

    const { signOutAction } = yield race({
      signOutAction: take(actions.logout),
      authLoop: call(authorizeLoop, storedToken),
    });

    if (signOutAction) {
      yield cancel(task);
      yield call(signOut);
    }
  }
}

export function* onWatch() {
  yield takeLatest(actions.watchAuth.type, watchAuth);
}

export function* loginSaga() {
  yield all([call(onWatch)]);
}
