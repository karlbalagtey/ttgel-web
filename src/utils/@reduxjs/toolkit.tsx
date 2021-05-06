import {
  createSlice as createSliceOriginal,
  CreateSliceOptions,
} from '@reduxjs/toolkit';

/* Wrap createSlice with stricter Name options */

/* istanbul ignore next */
export const createSlice = (options: CreateSliceOptions) => {
  return createSliceOriginal(options);
};
