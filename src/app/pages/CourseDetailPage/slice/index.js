import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { courseSaga } from './saga';

export const initialState = {
  id: null,
  info: null,
  error: null,
  loading: false,
  modules: null,
  moduleId: null,
  player: null,
};

const slice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    fetchCourse(state, action) {
      state.id = action.payload;
      state.loading = true;
    },
    fetchModule(state, action) {
      state.moduleId = action.payload;
      state.loading = true;
    },
    success(state, action) {
      state.loading = false;
      state.info = action.payload;
      state.error = null;
    },
    loadModules(state, action) {
      state.loading = false;
      state.modules = action.payload;
      state.error = null;
    },
    loadPlayer(state, action) {
      state.loading = false;
      state.player = action.payload;
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
