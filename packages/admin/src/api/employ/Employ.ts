import { Maneger } from "../maneger/Maneger";

export type Employ = {
  createdAt: Date;
  id: string;
  maneger?: Maneger | null;
  updatedAt: Date;
};
