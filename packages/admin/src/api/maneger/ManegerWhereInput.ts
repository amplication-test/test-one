import { EmployListRelationFilter } from "../employ/EmployListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type ManegerWhereInput = {
  emploies?: EmployListRelationFilter;
  id?: IntFilter;
};
