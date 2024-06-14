import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImplementorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Implementors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="availability" source="availability" />
        <TextField
          label="communicationChannels"
          source="communicationChannels"
        />
        <TextField label="compensation" source="compensation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="expectations" source="expectations" />
        <TextField label="experience" source="experience" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="onlineProfiles" source="onlineProfiles" />
        <TextField label="phone" source="phone" />
        <TextField label="portfolio" source="portfolio" />
        <TextField label="projectPreferences" source="projectPreferences" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
