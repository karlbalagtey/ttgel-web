import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';

const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;
const authFromStorage = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : null;

export const initialState = {
  user: userFromStorage,
  loading: false,
  error: null,
  auth: authFromStorage,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.loading = true;
      state.user = action.payload;
    },
    watchAuth(state) {
      state.loading = true;
    },
    logout(state) {
      state.loading = true;
      state.auth = null;
      state.user = null;
      state.error = null;
    },
    setAuth(state, action) {
      state.auth = action.payload;
      state.error = null;
    },
    success(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
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
