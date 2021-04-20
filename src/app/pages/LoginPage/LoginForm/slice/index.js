import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';

export const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuth: false,
  isRefreshing: false,
  expiresIn: null,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.loading = true;
    },
    watchAuth(state) {
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuth = false;
    },
    success(state, action) {
      state.user = action.payload.user;
      state.expiresIn = action.payload.token.expires;
      state.loading = false;
      state.error = null;
      state.isAuth = true;
    },
    error(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    reset(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuth = false;
    },
    refreshStart(state) {
      state.isRefreshing = true;
    },
    refreshSuccess(state, action) {
      state.isRefreshing = false;
      state.expiresIn = action.payload;
    },
  },
});

export const { actions: loginActions, reducer } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginSaga });
  return { actions: slice.actions };
};
