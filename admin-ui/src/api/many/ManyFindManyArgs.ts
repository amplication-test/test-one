import { ManyWhereInput } from "./ManyWhereInput";
import { ManyOrderByInput } from "./ManyOrderByInput";

export type ManyFindManyArgs = {
  where?: ManyWhereInput;
  orderBy?: Array<ManyOrderByInput>;
  skip?: number;
  take?: number;
};
