import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
};
