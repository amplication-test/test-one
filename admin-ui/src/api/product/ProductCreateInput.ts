import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  itemPrice?: number | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  name?: string | null;
  description?: string | null;
};
