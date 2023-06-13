import { MyService } from './MyService';

export type MyServicesState = {
  myServices: MyService[];
  error:string | undefined;
};
