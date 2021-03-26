import { put, takeLatest } from 'redux-saga/effects';
import { programmeActions as actions } from '.';
import { getProgrammes } from './api';

function* fetchProgrammes() {
  try {
    const { data } = yield getProgrammes();
    const { results } = data;

    yield put(actions.loadedProgrammes(results));
  } catch (error) {
    console.log(error);
    yield put(actions.errorProgrammes(error));
  }
}

export function* programmeSaga() {
  yield takeLatest(actions.fetchProgrammes.type, fetchProgrammes);
}
