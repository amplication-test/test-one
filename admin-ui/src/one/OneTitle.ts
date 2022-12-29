import { One as TOne } from "../api/one/One";

export const ONE_TITLE_FIELD = "id";

export const OneTitle = (record: TOne): string => {
  return record.id || String(record.id);
};
