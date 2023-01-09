import { Customer } from "../customer/Customer";

export type Address = {
  createdAt: Date;
  address_2: string | null;
  state: string | null;
  zip: number | null;
  id: string;
  updatedAt: Date;
  address_1: string | null;
  city: string | null;
  customers?: Array<Customer>;
};
