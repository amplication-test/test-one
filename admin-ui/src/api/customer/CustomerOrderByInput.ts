import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
  addressId?: SortOrder;
};
