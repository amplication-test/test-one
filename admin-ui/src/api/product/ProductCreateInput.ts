import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  name?: string | null;
  itemPrice?: number | null;
};
