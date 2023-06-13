import City from './City';

export type CityState = {
  cities: City[];
  error:string | undefined;
};
