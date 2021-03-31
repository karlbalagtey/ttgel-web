import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { courseSaga } from './saga';

export const initialState = {
  id: null,
  info: null,
  error: null,
  loading: false,
};

const slice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    fetchCourse(state, action) {
      state.id = action.payload;
      state.loading = true;
    },
    success(state, action) {
      state.loading = false;
      state.info = action.payload;
      state.error = null;
    },
    error(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: courseActions, reducer } = slice;

export const useCourseSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: courseSaga });
  return { actions: slice.actions };
};
