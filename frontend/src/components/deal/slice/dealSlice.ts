/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import { DealsState } from '../type/DealsState';

const initialState: DealsState = { deals: [] };

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {},
});

export const {} = dealsSlice.actions;

export default dealsSlice.reducer;
