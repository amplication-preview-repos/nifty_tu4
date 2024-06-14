import { Implementor as TImplementor } from "../api/implementor/Implementor";

export const IMPLEMENTOR_TITLE_FIELD = "fullName";

export const ImplementorTitle = (record: TImplementor): string => {
  return record.fullName?.toString() || String(record.id);
};
