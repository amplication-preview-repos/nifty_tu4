import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
