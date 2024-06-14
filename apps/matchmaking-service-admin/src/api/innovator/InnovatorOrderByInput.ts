import { SortOrder } from "../../util/SortOrder";

export type InnovatorOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectDescription?: SortOrder;
  projectName?: SortOrder;
  skillsNeeded?: SortOrder;
  updatedAt?: SortOrder;
};
