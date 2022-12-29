import { Many as TMany } from "../api/many/Many";

export const MANY_TITLE_FIELD = "id";

export const ManyTitle = (record: TMany): string => {
  return record.id || String(record.id);
};
