/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import { PhotosState } from '../type/PhotoState';

const initialState: PhotosState = { photos: [] };

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
});

export const {} = photosSlice.actions;

export default photosSlice.reducer;
