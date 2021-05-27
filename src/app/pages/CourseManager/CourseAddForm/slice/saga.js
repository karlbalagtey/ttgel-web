import { select, all, takeLatest, put, call } from 'redux-saga/effects';
import { courseActions as actions } from '.';
import { handleError } from 'utils/handle-error';
import { selectAddedCourse, selectImage } from './selectors';
import { addBasicCourse, addCourseImage } from './api';
import { snackbarActions } from 'app/components/SnackBar/slice';

export function* addCourse() {
  try {
    const courseDetails = yield select(selectAddedCourse);
    const { data } = yield call(addBasicCourse, courseDetails);
    yield put(actions.success(data));
    yield put(
      snackbarActions.notify({
        message: `Successfully added ${data.title}`,
        type: 'success',
        position: 'bottom-right',
      }),
    );
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
    yield put(
      snackbarActions.notify({
        message: errorMessage,
        type: 'error',
        position: 'top-center',
      }),
    );
  }
}

export function* uploadImage() {
  try {
    const image = yield select(selectImage);
    console.log(image);
    const { data } = yield call(addCourseImage, image);
    console.log(data);
    yield put(actions.success(data));
    yield put(
      snackbarActions.notify({
        timeout: 5000,
        message: 'Uploaded file',
        type: 'success',
        autoClose: true,
        position: 'top-center',
      }),
    );
  } catch (error) {
    console.log(error);
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

export function* onAddCourse() {
  yield takeLatest(actions.addCourse.type, addCourse);
}

export function* onUploadImage() {
  yield takeLatest(actions.uploadImage.type, uploadImage);
}

export function* courseSaga() {
  yield all([call(onAddCourse), call(onUploadImage)]);
}
