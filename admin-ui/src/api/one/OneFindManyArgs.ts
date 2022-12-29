import { OneWhereInput } from "./OneWhereInput";
import { OneOrderByInput } from "./OneOrderByInput";

export type OneFindManyArgs = {
  where?: OneWhereInput;
  orderBy?: Array<OneOrderByInput>;
  skip?: number;
  take?: number;
};
