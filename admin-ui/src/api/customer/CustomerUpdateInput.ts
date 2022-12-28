import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerUpdateInput = {
  lastName?: string | null;
  phone?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  email?: string | null;
  address?: AddressWhereUniqueInput | null;
};
