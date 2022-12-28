import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerCreateInput = {
  lastName?: string | null;
  phone?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  email?: string | null;
  address?: AddressWhereUniqueInput | null;
};
