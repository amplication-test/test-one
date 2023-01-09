import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  email?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
  address?: AddressWhereUniqueInput | null;
};
