import { Order } from "../order/Order";
import { Address } from "../address/Address";

export type Customer = {
  id: string;
  createdAt: Date;
  lastName: string | null;
  phone: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  firstName: string | null;
  email: string | null;
  address?: Address | null;
};
