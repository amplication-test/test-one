import { Employ } from "../employ/Employ";

export type Maneger = {
  createdAt: Date;
  emploies?: Array<Employ>;
  id: number;
  updatedAt: Date;
};
