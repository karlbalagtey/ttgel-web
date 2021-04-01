import { call, put, takeLatest, select, all } from 'redux-saga/effects';
import { courseActions as actions } from '.';
import { selectId } from './selectors';
import { getCourseDetails } from './api';
import { handleError } from 'utils/handle-error';

export function* fetchCourseDetails() {
  try {
    const id = yield select(selectId);

    const { data } = yield call(getCourseDetails, id);
    const { modules } = data;
    yield put(actions.success(data));
    yield put(actions.loadModules(modules));
  } catch (error) {
    const errorMessage = handleError(error);
    yield put(actions.error(errorMessage));
  }
}

export function* onFetchCourseDetails() {
  yield takeLatest(actions.fetchCourse.type, fetchCourseDetails);
}

export function* courseSaga() {
  yield all([call(onFetchCourseDetails)]);
}
