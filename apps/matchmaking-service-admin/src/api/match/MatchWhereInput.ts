import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
