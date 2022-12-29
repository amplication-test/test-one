import { Many } from "../many/Many";

export type One = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  manyes?: Many | null;
};
