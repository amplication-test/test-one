import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  email?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  address?: AddressWhereUniqueInput;
};
