import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';

export const initialState = {
  toggle: false,
  info: {
    timeout: 3000,
    message: null,
    type: null,
    autoClose: false,
    position: 'bottom-right',
  },
};

const slice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    notify(state, action) {
      state.toggle = true;
      state.info = action.payload;
    },
    close(state) {
      state.toggle = false;
      state.message = null;
    },
  },
});

export const { actions: snackbarActions, reducer } = slice;

export const useSnackbarSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
