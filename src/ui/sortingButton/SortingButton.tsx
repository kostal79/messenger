import React from "react";
import styles from "./SortingButton.module.css";
import { Arrow } from "../arrow";
import { ParamsStateType, SortingButtonProps } from "../../types/types";
import {useAppDispatch, useAppSelector } from "../../store/hooks";
import { setOrder, setSortBy, toggleOrder } from "../../store/slices/paramsSlice";

const SortingButton: React.FC<SortingButtonProps> = ({
  label,
  name,
  "data-testid": testId,
}: SortingButtonProps) => {
  const sortByValue = useAppSelector((state) => state.data.sortBy);
  const order = useAppSelector((state) => state.data.order);
  const dispatch = useAppDispatch();

  const isUpArrow: () => boolean = () => {
    if (sortByValue === name && order === "ASC") return true;
    else return false;
  };

  const toggleHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (sortByValue !== name) {
      dispatch(setSortBy(name as ParamsStateType["sortBy"]));
      dispatch(setOrder("DESC"));
    } else {
      dispatch(toggleOrder());
    }
  };

  return (
    <div className={styles["sorting__container"]} data-testid={testId}>
      {label && (
        <label className={styles["sorting__label"]} >
          {label}
        </label>
      )}
      <Arrow
        additionalClassname={styles["sorting__arrow"]}
        direction={isUpArrow() ? "up" : "down"}
        onClick={toggleHandler}
      />
    </div>
  );
};

export default React.memo(SortingButton);
