import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';
import { MyServicesState } from '../type/MyServicesState';
import User from '../../user/type/User';

const initialState: MyServicesState = { myServices: [], error: '' };

export const myServicesInit = createAsyncThunk('myServices/init', () =>
  api.getMyServices()
);

export const serviceAdd = createAsyncThunk('myServices/add', (obj: FormData) =>
  api.addServiceFetch(obj)
);
export const serviceDel = createAsyncThunk('myServices/del', (id:number) =>
  api.delServiceFetch(id)
);

const myServicesSlice = createSlice({
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
        state.myServices = [...state.myServices, action.payload];
        state.error = '';
      })
      .addCase(serviceAdd.rejected, (state, action) => {
        state.error = action.error.message;
       
      })
      .addCase(serviceDel.fulfilled, (state, action) => {
        state.myServices = state.myServices.filter((el)=> el.id !== action.payload)
        state.error = '';
      })
      .addCase(serviceDel.rejected, (state, action) => {
        state.error = action.error.message;
       
      });
  },
});

// export const {} = myServicesSlice.actions;

export default myServicesSlice.reducer;
