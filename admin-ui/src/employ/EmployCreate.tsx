import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManegerTitle } from "../maneger/ManegerTitle";

export const EmployCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="maneger.id" reference="Maneger" label="Maneger">
          <SelectInput optionText={ManegerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
