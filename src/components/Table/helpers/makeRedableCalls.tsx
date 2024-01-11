import { ReadableCallProps, TableRowProps } from "../../../types/types";
import { makeCallMap } from "../../../utils/create-call-map/create-call-map";
import { isToday, isYesterday } from "../../../utils/date-utils/dateUtils";
import styles from "../Table.module.css";
import TableRow from "../TableRow";

export const makeRedableCalls = (calls: ReadableCallProps) => {
  const makeRows = (callsMap: Map<TableRowProps["date"], TableRowProps[]>) => {
    const readableCalls: Array<any> = [];
    for (let [date, callsSet] of callsMap.entries()) {
      if (!isToday(date)) {
        readableCalls.push(
          <tr className={styles["table__sublabel"]} key={`head_${date}`}>
            <td className={styles["table__data"]}>
              {isYesterday(date) ? "Вчера" : date}
              <sup>{callsSet.length}</sup>
            </td>
          </tr>
        );
      }
      callsSet.forEach((call) =>
        readableCalls.push(<TableRow {...call} key={`call_id_${call.id}`} />)
      );
    }
    return readableCalls;
  };

  const callsMap = makeCallMap(calls);
  const readableCalls = makeRows(callsMap);
  return readableCalls;
};
