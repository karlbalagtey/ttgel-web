import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';

export const initialState = {
  user: null,
  loading: false,
  error: null,
  client: null,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.loading = true;
      state.user = action.payload;
    },
    watchAuth(state, action) {
      state.loading = true;
    },
    logout(state) {
      state.loading = true;
      state.user = [];
    },
    setClient(state, action) {
      state.client = action.payload;
    },
    unsetClient(state) {
      state.client = null;
    },
    success(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    error(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: loginActions, reducer } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginSaga });
  return { actions: slice.actions };
};
