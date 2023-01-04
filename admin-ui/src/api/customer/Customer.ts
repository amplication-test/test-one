import { Order } from "../order/Order";
import { Address } from "../address/Address";

export type Customer = {
  id: string;
  firstName: string | null;
  email: string | null;
  orders?: Array<Order>;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  phone: string | null;
  address?: Address | null;
};
