import { MyService } from '../../myService/type/MyService';
import User from '../../user/type/User';

export type Deal = {
  id: number;
  User?: User;
  MyService: MyService;
  myService_id: number;
  buyer_id: number;
  sellerKey: boolean;
  buyerKey: boolean;
  status: string;
};
