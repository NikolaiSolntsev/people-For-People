import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import User from '../../user/type/User';
import UserState from '../AuthState';
import * as api from '../api';
import RegistrationData from '../RegistrationData';
import Credentials from '../Credentials';

// начальный state
const initialState: UserState = {
  user: undefined,
  authChecked: false,
  loginFormError: undefined,
  registerFormError: undefined,
};

export const getUser = createAsyncThunk('auth/user', () => api.user());

export const userCheck = createAsyncThunk(
  'user/check',
  () => api.checkUser()
);

export const userRegistration = createAsyncThunk(
  'auth/registration',
  (data: RegistrationData) => api.registrationFetch(data)
);
export const userLogin = createAsyncThunk(
  'auth/login',
  (credentials: Credentials) => api.loginFetch(credentials)
);


export const userLogout = createAsyncThunk('auth/logout', () =>
  api.logoutFetch()

);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetLoginFormError: (state) => {
      state.loginFormError = undefined;
    },
    resetRegisterFormError: (state) => {
      state.registerFormError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getUser.fulfilled, (state, action) => {
        state.authChecked = true;
        state.user = action.payload.isLoggedIn
          ? action.payload.user
          : undefined;
      })

    .addCase(userCheck.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(userCheck.rejected, (state, action) => {
      state.error = action.error.message;
    })

      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.registerFormError = undefined;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.registerFormError = action.error.message;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loginFormError = undefined;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loginFormError = action.error.message;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.user = undefined;
      });
  },
});
export const { resetLoginFormError, resetRegisterFormError } =
  authSlice.actions;
export default authSlice.reducer;
