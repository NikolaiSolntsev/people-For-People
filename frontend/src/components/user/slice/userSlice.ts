/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import UserState from '../type/UserState';

const initialState: UserState = { user: undefined, error: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getTodos: (state) => state,
    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
  },
});

// export const {getTodos, removeTodo} = userSlice.actions;

export default userSlice.reducer;
