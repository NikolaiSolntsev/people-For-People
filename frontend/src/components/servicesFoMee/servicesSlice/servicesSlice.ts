import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import User from '../../user/type/User';
import UserState from '../../user/type/UserState';
import { MyServicesState } from '../../myService/type/MyServicesState';
import * as functions from '../functions';

// import registrationFetch from '../api';

// начальный state
const initialState: MyServicesState = { myServices: [] };


// export const userRegistration = createAsyncThunk(
//   'user/registration',
//   (obj: User) => api.registrationFetch(obj)
// );

export const getAllServices = createAsyncThunk(
    'allServices/get',
    () => functions.getServicesForMee()

);

const servicesForMeeSlice = createSlice({
  name: 'servicesForMee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
    .addCase(getAllServices.fulfilled, (state, action) => {
        state.myServices = action.payload;
    })
    // .addCase(userCheck.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // })
    // .addCase(userCheck.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
 
  },
});
// export const {} = userSlice.actions;
export default servicesForMeeSlice.reducer;

