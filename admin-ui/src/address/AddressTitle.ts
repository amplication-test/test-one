import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "address_2";

export const AddressTitle = (record: TAddress): string => {
  return record.address_2 || String(record.id);
};
