import { Employ } from "../employ/Employ";

export type Maneger = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  emploies?: Array<Employ>;
};
