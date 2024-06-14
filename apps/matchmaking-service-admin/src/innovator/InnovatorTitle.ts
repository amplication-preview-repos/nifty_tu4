import { Innovator as TInnovator } from "../api/innovator/Innovator";

export const INNOVATOR_TITLE_FIELD = "projectName";

export const InnovatorTitle = (record: TInnovator): string => {
  return record.projectName?.toString() || String(record.id);
};
