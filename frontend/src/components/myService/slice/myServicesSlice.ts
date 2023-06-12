/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import { MyServicesState } from '../type/MyServicesState';

const initialState: MyServicesState = { myServices: [] };

const servicesSlice = createSlice({
  name: 'myServices',
  initialState,
  reducers: {},
});

export const {} = servicesSlice.actions;

export default servicesSlice.reducer;
