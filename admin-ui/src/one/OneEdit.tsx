import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManyTitle } from "../many/ManyTitle";

export const OneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="many.id" reference="Many" label="Manyes">
          <SelectInput optionText={ManyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
