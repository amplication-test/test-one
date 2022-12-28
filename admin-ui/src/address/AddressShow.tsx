import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "./AddressTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address 2" source="address_2" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Address 1" source="address_1" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="Customer"
          target="AddressId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
