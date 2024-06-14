import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ImplementorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="availability" source="availability" />
        <TextInput
          label="communicationChannels"
          source="communicationChannels"
        />
        <NumberInput step={1} label="compensation" source="compensation" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="expectations" source="expectations" />
        <TextInput label="experience" source="experience" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="onlineProfiles" source="onlineProfiles" />
        <NumberInput step={1} label="phone" source="phone" />
        <TextInput label="portfolio" source="portfolio" />
        <TextInput label="projectPreferences" source="projectPreferences" />
        <TextInput label="skills" source="skills" />
      </SimpleForm>
    </Create>
  );
};
