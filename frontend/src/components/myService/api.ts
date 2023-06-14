import User from '../user/type/User';
import City from './type/City';
import { Country } from './type/Country';
import { MyService } from './type/MyService';
import { NameService } from './type/NameServicesState';

export const getMyServices = async (): Promise<MyService[]> => {
  const res = await fetch(`/api/myServices`);
  if(!res.ok){
    const {message} = await res.json()
    throw message;
  }
  const data = await res.json();
  return data.myServices;
};

export const getCountries = async (): Promise<Country[]> => {
  const res = await fetch('/api/countries');
  if(!res.ok){
    const {message} = await res.json()
    throw message;
  }
  const data = await res.json();
  return data;
};
export const addServiceFetch = async (obj: FormData): Promise<MyService> => {
  const res = await fetch('/api/myServices', {
    method: 'POST',
    body: obj,
  });
  if(!res.ok){
    const {message} = await res.json()
    throw message;
  }
  const data = await res.json(); 
  return data;
};

export const getCities = async (id:number): Promise<City[]> => {
  const res = await fetch(`/api/countries/${id}`);
  if(!res.ok){
    const {message} = await res.json()
    throw message;
  }
  const data = await res.json();
  return data;
};
export const getNameServices = async (): Promise<NameService[]> => {
  const res = await fetch(`/api/myServices/nameServices`);
  if(!res.ok){
    const {message} = await res.json()
    throw message;
  }
  const data = await res.json();
  return data;
};

export const delServiceFetch = async (id:number): Promise<number> => {
  const res = await fetch(`/api/myServices/${id}`, {method: 'DELETE',
  headers: {
    'Content-type': 'application/json',
  }});
  if(!res.ok){
    const {message} = await res.json()
    throw message;
  }
  const data = await res.json();
  return data;
};