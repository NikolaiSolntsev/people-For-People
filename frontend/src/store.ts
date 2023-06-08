import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import userSlice from './features/Users/userSlice';
import flowersSlice from './features/Flowers/flowersSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    user: userSlice,
    flowers: flowersSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
