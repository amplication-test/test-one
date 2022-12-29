import { Maneger } from "../maneger/Maneger";

export type Employ = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  maneger?: Maneger | null;
};
