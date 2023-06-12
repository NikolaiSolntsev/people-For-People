import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import User from '../../user/type/User';
import UserState from '../../user/type/UserState';
import * as api from '../api';

// import registrationFetch from '../api';

// начальный state
const initialState: UserState = { user: undefined, error: '' };

export const userCheck = createAsyncThunk('user/check', () => api.checkUser());

export const userRegistration = createAsyncThunk(
  'user/registration',
  (obj: User) => api.registrationFetch(obj)
);
export const userLogout = createAsyncThunk('user/logout', () =>
  api.logoutFetch()
);
const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userCheck.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userCheck.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = '';
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.user = undefined;
        state.error = '';
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
// export const {} = userSlice.actions;
export default authSlice.reducer;
