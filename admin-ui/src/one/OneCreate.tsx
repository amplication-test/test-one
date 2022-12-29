import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManyTitle } from "../many/ManyTitle";

export const OneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="many.id" reference="Many" label="Manyes">
          <SelectInput optionText={ManyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
