import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectSlice = state => state.course || initialState;

export const selectId = createSelector([selectSlice], state => state.id);
export const selectCourse = createSelector([selectSlice], state => state.info);
