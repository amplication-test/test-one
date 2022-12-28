import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  updatedAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  name?: SortOrder;
  itemPrice?: SortOrder;
};
