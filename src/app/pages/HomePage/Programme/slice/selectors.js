import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';

const selectSlice = state => state.programme || initialState;

export const selectProgramme = createSelector([selectSlice], state => state);
