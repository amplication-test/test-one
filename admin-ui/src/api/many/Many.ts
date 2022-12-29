import { One } from "../one/One";

export type Many = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ones?: Array<One>;
};
