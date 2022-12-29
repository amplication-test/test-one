import { StringFilter } from "../../util/StringFilter";
import { OneListRelationFilter } from "../one/OneListRelationFilter";

export type ManyWhereInput = {
  id?: StringFilter;
  ones?: OneListRelationFilter;
};
