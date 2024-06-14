import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InnovatorWhereInput = {
  id?: StringFilter;
  projectDescription?: StringNullableFilter;
  projectName?: StringNullableFilter;
  skillsNeeded?: StringNullableFilter;
};
