import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  User  from '../../user/type/User';
import UserState from '../../user/type/UserState';
import * as api from '../api';
import Credentials from '../type/Credentials';

// начальный state
const initialState: UserState = { user: undefined, error: '' };

export const userCheck = createAsyncThunk('user/check', () => api.checkUser());

export const userRegistration = createAsyncThunk(
  'user/registration',
  (obj: User) => api.registrationFetch(obj)
);

export const changeUser = createAsyncThunk(
  'user/change',
  (obj:User) => api.changeUserFetch(obj)
);

export const userLogin = createAsyncThunk(
  'user/login',
  (credentials: Credentials) => api.loginFetch(credentials)
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

      .addCase(changeUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = '';
      })
      .addCase(changeUser.rejected, (state, action) => {

      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = '';
      })
      .addCase(userLogin.rejected, (state, action) => {

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
