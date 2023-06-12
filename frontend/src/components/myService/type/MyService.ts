import { City } from "../../servicesFoMee/types/City";
import { Service } from "../../servicesFoMee/types/Service";
import User from "../../user/type/User";

export type MyService = {
  id: number;
  seller_id: number;
  service_id: number;
  price: number;
  city_id: number;
  City: City;
  User: User;
  Service: Service;
};
