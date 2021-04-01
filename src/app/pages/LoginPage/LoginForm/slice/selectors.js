import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';

const selectSlice = state => state.login || initialState;

export const selectUser = createSelector([selectSlice], state => state.user);
export const selectAuth = createSelector([selectSlice], state => state.isAuth);
