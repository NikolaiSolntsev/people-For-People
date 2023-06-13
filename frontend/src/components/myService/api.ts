import User from '../user/type/User';
import City from './type/City';
import { Country } from './type/Country';
import { MyService } from './type/MyService';

export const getMyServices = async (): Promise<MyService[]> => {
  const res = await fetch(`/api/myServices`);
  const data = await res.json();
  console.log(data, 'bbbbbbbbbbb');
  return data.myServices;
};

export const getCountries = async (): Promise<Country[]> => {
  const res = await fetch('/api/countries');
  const data = await res.json();
  return data;
};
export const addServiceFetch = async (obj: FormData): Promise<MyService[]> => {
  const res = await fetch('/api/myServices', {
    method: 'POST',
    body: obj,
  });
  const data = await res.json();
  return data;
};

export const getCities = async (): Promise<City[]> => {
  const res = await fetch('/api/myServices');
  const data = await res.json();
  return data;
};
