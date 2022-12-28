import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  name?: string | null;
  itemPrice?: number | null;
};
