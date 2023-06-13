import { Country } from './Country';

export type CountryState = {
  countries: Country[];
  error:string | undefined;
};
