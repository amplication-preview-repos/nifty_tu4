import { InnovatorWhereInput } from "./InnovatorWhereInput";
import { InnovatorOrderByInput } from "./InnovatorOrderByInput";

export type InnovatorFindManyArgs = {
  where?: InnovatorWhereInput;
  orderBy?: Array<InnovatorOrderByInput>;
  skip?: number;
  take?: number;
};
