import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectSlice = state => state.snackbar || initialState;

export const selectInfo = createSelector([selectSlice], state => state.info);
export const selectStatus = createSelector(
  [selectSlice],
  state => state.toggle,
);
