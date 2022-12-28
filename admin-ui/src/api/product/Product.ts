import { Order } from "../order/Order";

export type Product = {
  updatedAt: Date;
  description: string | null;
  orders?: Array<Order>;
  id: string;
  createdAt: Date;
  name: string | null;
  itemPrice: number | null;
};
