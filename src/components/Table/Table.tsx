import React from "react";
import styles from "./Table.module.css";
import TableBody from "./TableBody";
import ReactPaginate from "react-paginate";
import UseFecthData from "./UseFecthData";
import { useAppDispatch } from "../../store/hooks";
import { setPage } from "../../store/slices/paramsSlice";
import TableHead from "./TableHead";

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
        <TableHead />
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
