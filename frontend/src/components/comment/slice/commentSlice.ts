/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import { CommentsState } from '../type/CommentsState';

const initialState: CommentsState = { comments: [] };

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
