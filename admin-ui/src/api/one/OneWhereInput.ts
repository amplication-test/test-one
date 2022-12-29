import { StringFilter } from "../../util/StringFilter";
import { ManyWhereUniqueInput } from "../many/ManyWhereUniqueInput";

export type OneWhereInput = {
  id?: StringFilter;
  manyes?: ManyWhereUniqueInput;
};
