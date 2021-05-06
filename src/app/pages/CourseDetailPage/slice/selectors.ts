import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectSlice = state => state.course || initialState;

export const selectId = createSelector([selectSlice], state => state.id);
export const selectModuleId = createSelector(
  [selectSlice],
  state => state.moduleId,
);
export const selectCourse = createSelector([selectSlice], state => state.info);
export const selectModules = createSelector(
  [selectSlice],
  state => state.modules,
);
export const selectPlayer = createSelector(
  [selectSlice],
  state => state.player,
);
