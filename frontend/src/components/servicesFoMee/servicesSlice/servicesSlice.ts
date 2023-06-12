import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MyServicesState } from '../../myService/type/MyServicesState';
import * as functions from '../functions';

// начальный state
const initialState: MyServicesState = { myServices: [] };
export const getAllServices = createAsyncThunk('allServices/get', () =>
  functions.getServicesForMee()
);

const servicesForMeeSlice = createSlice({
  name: 'servicesForMee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllServices.fulfilled, (state, action) => {
      state.myServices = action.payload;
    });
  },
});
// export const {} = userSlice.actions;
export default servicesForMeeSlice.reducer;
