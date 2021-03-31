import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';

const selectSlice = state => state.programme || initialState;
const selectFeatured = state =>
  state.programme ? state.programme.featured : [];

export const selectProgrammes = createSelector(
  [selectSlice],
  state => state.programmes,
);

export const selectCourses = createSelector(
  [selectFeatured],
  state => state.courses,
);

export const selectId = createSelector([selectSlice], state => state.id);
