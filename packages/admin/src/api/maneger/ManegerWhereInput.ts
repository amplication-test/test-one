import { IntFilter } from "../../util/IntFilter";
import { EmployListRelationFilter } from "../employ/EmployListRelationFilter";

export type ManegerWhereInput = {
  id?: IntFilter;
  emploies?: EmployListRelationFilter;
};
