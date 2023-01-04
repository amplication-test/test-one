import { Dsafa as TDsafa } from "../api/dsafa/Dsafa";

export const DSAFA_TITLE_FIELD = "id";

export const DsafaTitle = (record: TDsafa): string => {
  return record.id || String(record.id);
};
