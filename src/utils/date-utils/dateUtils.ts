import { TableRowProps } from "../../types/types";
import dateFormat from "dateformat";

export const isYesterday = (date: TableRowProps["date"]) => {
  if (
    dateFormat(new Date().setDate(new Date().getDate() - 1), "yyyy-mm-dd") ===
    date
  )
    return true;
  else return false;
};

export const isToday = (date: TableRowProps["date"]) => {
  if (dateFormat(new Date(), "yyyy-mm-dd") === date) return true;
  else return false;
};
