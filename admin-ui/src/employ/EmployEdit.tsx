import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManegerTitle } from "../maneger/ManegerTitle";

export const EmployEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="maneger.id" reference="Maneger" label="Maneger">
          <SelectInput optionText={ManegerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
