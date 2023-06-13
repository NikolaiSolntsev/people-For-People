/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CountryState } from '../type/CountryState';
import * as api from '../api';

const initialState: CountryState = { countries: [], error: '' };

export const countryInit = createAsyncThunk('countries/init', () =>
  api.getCountries()
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryInit.fulfilled, (state, action) => {
        console.log(action.payload);
        state.countries = action.payload;
        state.error = '';
      })
      .addCase(countryInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {} = countriesSlice.actions;

export default countriesSlice.reducer;
