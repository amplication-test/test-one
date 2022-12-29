import { EmployCreateNestedManyWithoutManegersInput } from "./EmployCreateNestedManyWithoutManegersInput";

export type ManegerCreateInput = {
  emploies?: EmployCreateNestedManyWithoutManegersInput;
};
