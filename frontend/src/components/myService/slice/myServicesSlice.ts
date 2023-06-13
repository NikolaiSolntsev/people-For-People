import * as api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MyServicesState } from '../type/MyServicesState';

const initialState: MyServicesState = { myServices: [], error: '' };

export const myServicesInit = createAsyncThunk('myServices/init', () =>
  api.getMyServices()
);

export const serviceAdd = createAsyncThunk('myServices/add', (obj: FormData) =>
  api.addServiceFetch(obj)
);

const servicesSlice = createSlice({
  name: 'myServices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myServicesInit.fulfilled, (state, action) => {
        state.myServices = action.payload;
        state.error = '';
      })
      .addCase(myServicesInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(serviceAdd.fulfilled, (state, action) => {
        state.myServices = action.payload;
        state.error = '';
      })
      .addCase(serviceAdd.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {} = servicesSlice.actions;

export default servicesSlice.reducer;
