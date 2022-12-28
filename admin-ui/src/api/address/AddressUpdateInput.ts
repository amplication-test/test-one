import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_2?: string | null;
  address_1?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: number | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
};
