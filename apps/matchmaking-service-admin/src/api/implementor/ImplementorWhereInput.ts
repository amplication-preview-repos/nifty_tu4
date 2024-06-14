import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImplementorWhereInput = {
  availability?: StringNullableFilter;
  communicationChannels?: StringNullableFilter;
  compensation?: IntNullableFilter;
  email?: StringNullableFilter;
  expectations?: StringNullableFilter;
  experience?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  onlineProfiles?: StringNullableFilter;
  phone?: IntNullableFilter;
  portfolio?: StringNullableFilter;
  projectPreferences?: StringNullableFilter;
  skills?: StringNullableFilter;
};
