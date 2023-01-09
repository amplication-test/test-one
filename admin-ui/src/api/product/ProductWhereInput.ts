import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  itemPrice?: FloatNullableFilter;
  orders?: OrderListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
};
