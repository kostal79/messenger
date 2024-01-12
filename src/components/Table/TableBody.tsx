import React from "react";
import styles from "./Table.module.css";
import { makeRedableCalls } from "./helpers/makeReadableCalls";
import { TableBodyPorps } from "../../types/types";
import { useAppSelector } from "../../store/hooks";
import { makePureCalls } from "./helpers/makePureCalls";

const TableBody: React.FC<TableBodyPorps> = ({ calls }: TableBodyPorps) => {
  const sortBy = useAppSelector((state) => state.data.sortBy);
  const order = useAppSelector((state)=> state.data.order)
  const tableContent =
    sortBy === "date" ? makeRedableCalls({calls, order}) : makePureCalls({calls});
  return (
    <>
      <tbody className={styles["table-for-day"]}>{tableContent}</tbody>
    </>
  );
};

export default TableBody;
