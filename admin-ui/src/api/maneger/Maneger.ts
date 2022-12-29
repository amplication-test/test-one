import { Employ } from "../employ/Employ";

export type Maneger = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  emploies?: Array<Employ>;
};
