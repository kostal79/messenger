import React from "react";
import styles from "./Table.module.css";
import UseFecthData from "./UseFecthData";
import { makeRedableCalls } from "./helpers/makeRedableCalls";

const TableForDay: React.FC = () => {
  const { calls, isLoading, error, isSuccess } = UseFecthData();
  if (calls.length === 0 && isSuccess) {
    return <div>Звонков не обнаружено</div>;
  }
  else if (calls.length > 0) {
    return (
      <>
        <tbody className={styles["table-for-day"]}>
          {makeRedableCalls(calls)}
        </tbody>
      </>
    );
  } else if (error) {
    return <div>Load Error</div>
  }

  else if (isLoading) return <div>...Loading</div>
};

export default TableForDay;
