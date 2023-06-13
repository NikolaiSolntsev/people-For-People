import { City } from '../../servicesFoMee/types/City';
import { Service } from '../../servicesFoMee/types/Service';
import User from '../../user/type/User';
import { MyServicesState } from './MyServicesState';

export type MyService = {
  id: number;
  seller_id: number;
  service_id: number;
  price?: number;
  description?: string;
  image: string;
  city_id: number;
  City: City;
  User: User;
  Service: Service;
} & MyServicesState;
