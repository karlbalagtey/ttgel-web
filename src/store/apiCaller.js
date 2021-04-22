import { race, call, put, delay } from '@redux-saga/core/effects';
import { requestWithAuth } from './requestWithAuth';

export function* callApi(apiPath, options = {}, type) {
  const requestOptions = options.requestOptions;
  const URL = apiPath;

  try {
    const { response, timeout } = yield race({
      response: call(requestWithAuth, URL, requestOptions),
      timeout: delay(10000),
    });
    const { ...payload } = response;

    if (timeout) {
      // invoke a reject action
      yield put({ type: `${type}_REJECTED`, payload: 'timeout' });
    }
    yield put({ type: `${type}_SUCCESS`, payload });

    return { response: payload };
  } catch (error) {
    if (error.response && error.response.data) {
      const payload = { data: error.response.data.description };
      yield put({ type: `${type}_REJECTED`, payload });
    } else {
      yield put({ type: `${type}_REJECTED`, payload: error });
    }
    return null;
  }
}
