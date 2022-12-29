import { Employ as TEmploy } from "../api/employ/Employ";

export const EMPLOY_TITLE_FIELD = "id";

export const EmployTitle = (record: TEmploy): string => {
  return record.id || String(record.id);
};
