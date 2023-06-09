import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import User from '../../user/type/User';
import UserState from '../../user/type/UserState';
import * as api from '../api';
// import registrationFetch from '../api';

// начальный state
const initialState: UserState = { user: {}, error: '' };

export const userRegistration = createAsyncThunk(
  'user/registration',
  (obj: User) => api.registrationFetch(obj)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = '';
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
// export const {} = userSlice.actions;
export default userSlice.reducer;
