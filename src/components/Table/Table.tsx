import React from "react";
import styles from "./Table.module.css";
import { SortingButton } from "../../ui/sortingButton";
import TableBody from "./TableBody";
import ReactPaginate from "react-paginate";
import UseFecthData from "./UseFecthData";
import { useAppDispatch } from "../../store/hooks";
import { setPage } from "../../store/slices/paramsSlice";

const Table: React.FC = () => {
  const { totalRows, calls, isLoading, error, isSuccess, limit } =
    UseFecthData();

  const dispatch = useAppDispatch();

  const clickPageHandler = (selectedItem: { selected: number }) => {
    dispatch(setPage(selectedItem.selected));
  };

  const totalPages: number = Math.ceil(totalRows / limit);

  return (
    <div className={styles["table__container"]}>
      <table className={styles["table__body"]}>
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
        {calls.length > 0 && <TableBody calls={calls} />}
      </table>
      {calls.length > 0 && (
        <ReactPaginate
          containerClassName={styles.paginate}
          breakLabel="..."
          nextLabel="следующая >"
          onPageChange={clickPageHandler}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< предыдущая"
          renderOnZeroPageCount={null}
          pageClassName={styles["paginate__page"]}
          activeClassName={styles["paginate__page--active"]}
          nextClassName={styles["paginate__next"]}
          previousClassName={styles["paginate__prev"]}
        />
      )}
      {isSuccess && calls.length === 0 && <div>Нет записей</div>}
      {isLoading && <div>...Loading</div>}
      {error && <div>Loading error</div>}
    </div>
  );
};

export default Table;
