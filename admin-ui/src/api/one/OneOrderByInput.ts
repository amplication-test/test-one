import { SortOrder } from "../../util/SortOrder";

export type OneOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  manyesId?: SortOrder;
};
