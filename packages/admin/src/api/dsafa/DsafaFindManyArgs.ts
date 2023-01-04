import { DsafaWhereInput } from "./DsafaWhereInput";
import { DsafaOrderByInput } from "./DsafaOrderByInput";

export type DsafaFindManyArgs = {
  where?: DsafaWhereInput;
  orderBy?: Array<DsafaOrderByInput>;
  skip?: number;
  take?: number;
};
