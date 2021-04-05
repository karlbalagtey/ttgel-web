import { select, all, takeLatest, put, call } from 'redux-saga/effects';
import { courseActions as actions } from '.';
import { handleError } from 'utils/handle-error';
import { selectAddedCourse } from './selectors';
import { addBasicCourse } from './api';
import { snackbarActions } from 'app/components/SnackBar/slice';

export function* addCourse() {
  try {
    const courseDetails = yield select(selectAddedCourse);
    const { data } = yield call(addBasicCourse, courseDetails);
    yield put(actions.success(data));
    yield put(
      snackbarActions.notify({
        timeout: 5000,
        message: 'Added course',
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

export function* onAddCourse() {
  yield takeLatest(actions.addCourse.type, addCourse);
}

export function* courseSaga() {
  yield all([call(onAddCourse)]);
}
