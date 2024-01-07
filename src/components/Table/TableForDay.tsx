import React from "react";
import TableRow, { TableRowProps } from "./TableRow";
import styles from "./Table.module.css";

type TableForDayProps = {
  label?: string;
  rows?: number;
  content?: TableRowProps[];
};

const TableForDay: React.FC<TableForDayProps> = ({
  label,
  rows,
  content,
}: TableForDayProps) => {
  let trs;
  if (content) {
    trs = content.map((tr) => {
      return <TableRow {...tr} key={tr.id} />;
    });
  }
  return (
    <>
      {label && (
        <thead>
          <tr className={styles["table__label"]}>
            <td className={styles["table__data"]}>
              {label}
              <sup>{rows ? rows : 0}</sup>
            </td>
          </tr>
        </thead>
      )}

      <tbody className={styles["table-for-day"]}>{trs && trs}</tbody>
    </>
  );
};

export default TableForDay;
