import { EmployWhereInput } from "./EmployWhereInput";
import { EmployOrderByInput } from "./EmployOrderByInput";

export type EmployFindManyArgs = {
  where?: EmployWhereInput;
  orderBy?: Array<EmployOrderByInput>;
  skip?: number;
  take?: number;
};
