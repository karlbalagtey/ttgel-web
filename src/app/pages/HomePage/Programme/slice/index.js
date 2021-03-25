import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { programmeSaga } from './saga';

// The initial state of the Homepage
export const initialState = {
  courses: [],
};

const slice = createSlice({
  name: 'programme',
  initialState,
  reducers: {
    getCourses(state, action) {
      state.courses = action.payload;
    },
    success(state, action) {
      state.courses = action.payload;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: programmeActions } = slice;

/**
 * Let's turn this into a hook style usage.
 * This will inject the slice to redux store and return actions in case you want to use in the component
 */
export const useProgrammeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: programmeSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProgrammeSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
