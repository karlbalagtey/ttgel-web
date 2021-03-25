import { put, takeLatest } from 'redux-saga/effects';
import { programmeActions as actions, programmeActions } from '.';
import { ttgelGetCourses } from './api';

function* getCourses() {
  try {
    const data = yield ttgelGetCourses();
    console.log(data);
    yield put(programmeActions.success(data));
  } catch (error) {
    console.log(error);
    yield put(programmeActions.error(error));
  }
}

export function* programmeSaga() {
  yield takeLatest(actions.someAction.type, getCourses);
}
