import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  itemPrice: number | null;
  orders?: Array<Order>;
  id: string;
  updatedAt: Date;
  name: string | null;
  description: string | null;
};
