import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_2?: string | null;
  state?: string | null;
  zip?: number | null;
  address_1?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
};
