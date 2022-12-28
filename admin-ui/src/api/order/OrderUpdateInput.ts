import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: number | null;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  discount?: number | null;
};
