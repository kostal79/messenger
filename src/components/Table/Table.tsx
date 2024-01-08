import React from "react";
import styles from "./Table.module.css";
import { SortingButton } from "../../ui/sortingButton";
import TableBody from "./TableBody";
import AudioFile from "../../assets/Гражданская Оборона - Все Идет По Плану.mp3";
import { TableRowProps } from "../../types/types";

// const label = "Вчера";
// const rows = 3;
// const content: TableRowProps[] = [
//   {
//     id: 1,
//     type: "incoming",
//     time: "19:00",
//     avatar: "",
//     phone: "+7 (987) 567-17-12",
//     source: "Rabota.ru",
//     badgeStatus: "excellent",
//     duration: "12:06",
//     audio: AudioFile,
//   },
//   {
//     id: 2,
//     type: "incoming",
//     time: "19:00",
//     avatar: "",
//     phone: "+7 (987) 567-17-12",
//     source:
//       "Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво",
//     badgeStatus: "excellent",
//     duration: "12:06",
//     audio: AudioFile,
//   },
//   {
//     id: 3,
//     type: "outcoming",
//     time: "19:00",
//     avatar: "",
//     phone: "+7 (987) 567-17-12",
//     source:
//       "Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво",
//     badgeStatus: "excellent",
//     duration: "12:06",
//     audio: AudioFile,
//   },
// ];

const Table: React.FC = () => {
  return (
    <div className={styles["table__container"]}>
      <table className={styles["table__body"]}>
        <thead>
          <tr className={styles["table__row"]}>
            <th className={styles["table__head"]}>Тип</th>
            <th className={styles["table__head"]}>
              <SortingButton
                label="Время"
                name="date"
              />
            </th>
            <th className={styles["table__head"]}>Сотрудник</th>
            <th className={styles["table__head"]}>Звонок</th>
            <th className={styles["table__head"]}>Источник</th>
            <th className={styles["table__head"]}>Оценка</th>
            <th className={styles["table__head"]}>
              <SortingButton
                label="Длительность"
                name="duration"
              />
            </th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
