import React from 'react'
import styles from "./Table.module.css";
import { SortingButton } from '../../ui/sortingButton';


const TableHead:React.FC = () => {
  return (
    <thead>
    <tr className={styles["table__row"]}>
      <th className={styles["table__head"]}>Тип</th>
      <th className={styles["table__head"]}>
        <SortingButton label="Время" name="date" />
      </th>
      <th className={styles["table__head"]}>Сотрудник</th>
      <th className={styles["table__head"]}>Звонок</th>
      <th className={styles["table__head"]}>Источник</th>
      <th className={styles["table__head"]}>Оценка</th>
      <th className={styles["table__head"]}>
        <SortingButton label="Длительность" name="duration" />
      </th>
    </tr>
  </thead>
  )
}

export default TableHead;