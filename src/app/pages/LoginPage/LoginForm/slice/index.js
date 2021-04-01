import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';

const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;
const authFromStorage = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : false;

export const initialState = {
  user: userFromStorage,
  loading: false,
  error: null,
  isAuth: authFromStorage,
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
      state.loading = true;
    },
    logout(state) {
      state.user = null;
      state.loading = true;
      state.error = null;
      state.isAuth = false;
    },
    success(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.isAuth = true;
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
