import City from './City';

export type Country = {
  id: number;
  countryName: string;
  value: string;
  lable: string;
  Cities: City[];
  countryCode: string;
  label: string;
  phoneCode: string;
  suggested?: boolean;
};