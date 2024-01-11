import { TableRowProps } from "../../types/types";

export const makeCallMap = (calls: TableRowProps[]) => {
    const callsMap = new Map<TableRowProps["date"], TableRowProps[]>();
    calls.forEach((tr: TableRowProps) => {
      if (!callsMap.has(tr.date)) {
        callsMap.set(tr.date, [tr]);
      } else {
        callsMap.set(tr.date, [...callsMap.get(tr.date)!, tr]);
      }
    });
    return callsMap;
  };