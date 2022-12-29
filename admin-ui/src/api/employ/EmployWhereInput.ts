import { StringFilter } from "../../util/StringFilter";
import { ManegerWhereUniqueInput } from "../maneger/ManegerWhereUniqueInput";

export type EmployWhereInput = {
  id?: StringFilter;
  maneger?: ManegerWhereUniqueInput;
};
