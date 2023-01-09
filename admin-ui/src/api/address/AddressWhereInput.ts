import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";

export type AddressWhereInput = {
  address_2?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
  id?: StringFilter;
  address_1?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
};
