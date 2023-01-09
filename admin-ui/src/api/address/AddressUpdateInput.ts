import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_2?: string | null;
  state?: string | null;
  zip?: number | null;
  address_1?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
};
