import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './components/authentication/authSlice/authSlice';
import servicesSlice from './components/servicesFoMee/servicesSlice/servicesSlice';
import countriesSlice from './components/myService/slice/countriesSlice ';
import citiesSlice from './components/myService/slice/citiesSlice';
import myServicesSlice from './components/myService/slice/myServicesSlice';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    auth: authSlice,
    allServices: servicesSlice,
    myServices: myServicesSlice,
    allCities:citiesSlice,
    countries: countriesSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
