import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InnovatorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Innovators"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="projectDescription" source="projectDescription" />
        <TextField label="projectName" source="projectName" />
        <TextField label="skillsNeeded" source="skillsNeeded" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
