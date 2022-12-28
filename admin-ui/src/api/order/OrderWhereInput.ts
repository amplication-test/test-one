import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  discount?: FloatNullableFilter;
};
