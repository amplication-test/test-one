import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MANEGER_TITLE_FIELD } from "../maneger/ManegerTitle";

export const EmployList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Maneger" source="maneger.id" reference="Maneger">
          <TextField source={MANEGER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
