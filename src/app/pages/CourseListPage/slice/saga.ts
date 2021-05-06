import { call, all, put, takeLatest, select } from 'redux-saga/effects';
import { programmeActions as actions } from '.';
import { getProgrammes, getOneProgramme } from './api';
import { selectId } from './selectors';

function* fetchProgrammes() {
  try {
    const { data } = yield getProgrammes();
    yield put(actions.loadedProgrammes(data));
  } catch (error) {
    console.log(error);
    yield put(actions.errorProgrammes(error));
  }
}

function* fetchFeaturedProgramme() {
  const id = yield select(selectId);

  if (id.length === 0) {
    yield put(actions.errorProgrammes('error no Id selected'));
  }

  try {
    const { data } = yield getOneProgramme(id);
    yield put(actions.loadedFeatured(data));
  } catch (error) {
    console.log(error);
    yield put(actions.errorProgrammes(error));
  }
}

export function* onFetchFeatureProgramme() {
  yield takeLatest(actions.fetchFeaturedProgramme.type, fetchFeaturedProgramme);
}
export function* onFetchProgrammes() {
  yield takeLatest(actions.fetchProgrammes.type, fetchProgrammes);
}
export function* programmeSaga() {
  yield all([call(onFetchFeatureProgramme), call(onFetchProgrammes)]);
}
