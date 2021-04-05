import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { courseSaga } from './saga';

export const initialState = {
  success: null,
  error: null,
  addedCourse: '',
};

const slice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addCourse(state, action) {
      state.loading = true;
      state.course = action.payload;
    },
    success(state, action) {
      state.loading = false;
      state.success = action.payload;
    },
    error(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: courseActions, reducer } = slice;

export const useCourseSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: courseSaga });
  return { actions: slice.actions };
};
