import { Maneger as TManeger } from "../api/maneger/Maneger";

export const MANEGER_TITLE_FIELD = "id";

export const ManegerTitle = (record: TManeger): string => {
  return record.id || String(record.id);
};
