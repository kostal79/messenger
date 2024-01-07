import React from "react";
import styles from "./Table.module.css";
import { CallIcon, CallIconType } from "../../ui/call-icon";
import { Badge, StatusType } from "../../ui/badge";
import { Avatar } from "../../ui/avatar";
import { AudioPlayer } from "../../ui/audio-player";

export interface TableRowProps {
  id: string | number,
  type: CallIconType;
  time: string;
  avatar?: string;
  phone: string;
  source?: string;
  badgeStatus?: StatusType;
  duration?: string;
  audio?: string;
}

const TableRow: React.FC<TableRowProps> = ({
  type,
  time,
  avatar,
  phone,
  source,
  badgeStatus,
  duration,
  audio,
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
        {audio ? (
          <>
            <span className={styles["table__duration"]}>{duration}</span>
            <span className={styles["table__player"]}><AudioPlayer track={audio} /></span>
          </>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default TableRow;
