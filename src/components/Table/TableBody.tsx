import React from "react";
import TableRow from "./TableRow";
import styles from "./Table.module.css";
import UseFecthData from "./UseFecthData";
import { TableRowProps } from "../../types/types";


const TableForDay: React.FC = () => {
  const data = UseFecthData();
  let trs;
  if (data) {
    trs = data.map((tr: any, index:number, arr:TableRowProps[]) => {
      return <TableRow {...tr} key={tr.id} />;
    });
  }
  return (
    <>
        {/* <thead>
          <tr className={styles["table__label"]}>
            <td className={styles["table__data"]}>
              {label}
              <sup>{rows ? rows : 0}</sup>
            </td>
          </tr>
        </thead> */}
      <tbody className={styles["table-for-day"]}>{trs && trs}</tbody>
    </>
  );
};

export default TableForDay;
