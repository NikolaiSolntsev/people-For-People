import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';
import { MyServicesState } from '../type/MyServicesState';
import User from '../../user/type/User';
import { NameServicesState } from '../type/NameServicesState';

const initialState: NameServicesState = { nameServices: [], error: '' };

export const nameServicesInit = createAsyncThunk(
  'nameServices/init',
  () => api.getNameServices()
);


const nameServicesSlice = createSlice({
  name: 'nameServices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(nameServicesInit.fulfilled, (state, action) => {
        state.nameServices = action.payload;
        state.error = '';
      })
      .addCase(nameServicesInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      
  },
});



export default nameServicesSlice.reducer;
