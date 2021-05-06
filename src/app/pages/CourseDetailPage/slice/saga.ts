import { call, put, takeLatest, select, all } from 'redux-saga/effects';
import { courseActions as actions } from '.';
import { loginActions } from '../../LoginPage/LoginForm/slice';
import { selectId, selectModuleId } from './selectors';
import { getCourseDetails, getModuleToPlay } from './api';
import { handleError } from 'utils/handle-error';

export function* fetchCourseDetails() {
  try {
    const id = yield select(selectId);

    const { data } = yield call(getCourseDetails, id);
    const { modules } = data;
    yield put(actions.success(data));
    yield put(actions.loadModules(modules));
  } catch (error) {
    const errorMessage = yield call(handleError, error);
    if (errorMessage) {
      yield put(actions.error(errorMessage));
    }
  }
}

export function* fetchModule() {
  try {
    const id = yield select(selectModuleId);
    const { data } = yield call(getModuleToPlay, id);
    console.log(data);
    yield put(actions.loadPlayer(data));
  } catch (error) {
    const errorMessage = yield call(handleError, error);
    if (errorMessage) {
      yield put(actions.error(errorMessage));
    }
  }
}

export function* onFetchCourseDetails() {
  yield takeLatest(actions.fetchCourse.type, fetchCourseDetails);
}

export function* onFetchModule() {
  yield takeLatest(actions.fetchModule.type, fetchModule);
}

export function* courseSaga() {
  yield all([call(onFetchCourseDetails), call(onFetchModule)]);
}
