import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ImplementorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
