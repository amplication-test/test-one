import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  email?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
  address?: AddressWhereUniqueInput | null;
};
