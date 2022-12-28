import { Customer } from "../customer/Customer";

export type Address = {
  updatedAt: Date;
  address_2: string | null;
  createdAt: Date;
  address_1: string | null;
  city: string | null;
  state: string | null;
  zip: number | null;
  customers?: Array<Customer>;
  id: number;
};
