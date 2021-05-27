import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { loadState, saveState } from '../utils/localStorage';
import { createReducer } from './reducers';
import throttle from 'lodash/throttle';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const persistedState = loadState();
  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['course/uploadImage'],
        },
      }),
      ...middlewares,
    ],
    preloadedState: persistedState,
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  store.subscribe(
    throttle(() => {
      saveState({
        login: store.getState().login,
      });
    }, 1000),
  );

  return store;
}
