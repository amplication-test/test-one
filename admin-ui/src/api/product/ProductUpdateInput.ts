import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  itemPrice?: number | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  name?: string | null;
  description?: string | null;
};
