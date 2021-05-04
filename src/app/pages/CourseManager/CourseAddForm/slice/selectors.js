import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';

const selectSlice = state => state.course || initialState;

export const selectAddedCourse = createSelector(
  [selectSlice],
  state => state.addedCourse,
);
