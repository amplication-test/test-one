import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  firstName?: StringNullableFilter;
  email?: StringNullableFilter;
  address?: AddressWhereUniqueInput;
};
