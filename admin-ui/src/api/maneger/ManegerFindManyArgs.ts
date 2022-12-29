import { ManegerWhereInput } from "./ManegerWhereInput";
import { ManegerOrderByInput } from "./ManegerOrderByInput";

export type ManegerFindManyArgs = {
  where?: ManegerWhereInput;
  orderBy?: Array<ManegerOrderByInput>;
  skip?: number;
  take?: number;
};
