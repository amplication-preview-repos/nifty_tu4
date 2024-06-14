import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InnovatorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="projectDescription"
          multiline
          source="projectDescription"
        />
        <TextInput label="projectName" source="projectName" />
        <TextInput label="skillsNeeded" source="skillsNeeded" />
      </SimpleForm>
    </Create>
  );
};
