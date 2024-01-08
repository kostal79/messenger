import React from "react";
import styles from "./Table.module.css";
import { CallIcon } from "../../ui/call-icon";
import { Badge } from "../../ui/badge";
import { Avatar } from "../../ui/avatar";
import { AudioPlayer } from "../../ui/audio-player";
import { TableRowProps } from "../../types/types";


const TableRow: React.FC<TableRowProps> = ({
  type,
  time,
  avatar,
  phone,
  source,
  badgeStatus,
  duration,
  record,
  partnership_id
}: TableRowProps) => {

  return (
    <tr className={styles["table__row"]}>
      <td className={styles["table__data"]}>
        <CallIcon type={type} />
      </td>
      <td className={styles["table__data"]}>
        <span>{time}</span>
      </td>
      <td className={styles["table__data"]}>
        <Avatar url={avatar} />
      </td>
      <td className={styles["table__data"]}>
        <span>{phone}</span>
      </td>
      <td className={styles["table__data"]}>
        <span>{source}</span>
      </td>
      <td className={styles["table__data"]}>
        <Badge status={badgeStatus} />
      </td>
      <td className={styles["table__data"]}>
        {duration ? (
          <>
            <span className={styles["table__duration"]}>{duration}</span>
            {record && <span className={styles["table__player"]}><AudioPlayer record={record} partnership_id={partnership_id}/></span>}
          </>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default TableRow;
