import { StringFilter } from "../../util/StringFilter";
import { EmployListRelationFilter } from "../employ/EmployListRelationFilter";

export type ManegerWhereInput = {
  id?: StringFilter;
  emploies?: EmployListRelationFilter;
};
