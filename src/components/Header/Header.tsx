import React from "react";
import styles from "./Header.module.css";
import { DropDown } from "../../ui/dropDown";
import { DateDropdown } from "../../ui/dateDropdown";
import { ResetButton } from "../../ui/resetButton";
import { useAppDispatch } from "../../store/hooks";
import { resetCallType, setPeriod } from "../../store/slices/paramsSlice";
import { ContentType } from "../../types/types";

export interface HeaderProps {}

const Header: React.FC = () => {
  const dropdownItems = ["Все типы", "Входящие", "Исходящие"];
  const dispatch = useAppDispatch();

  const changePeriod = (value: ContentType) => {
    dispatch(setPeriod(value));
  };

  const resetFilter = () => {
    dispatch(resetCallType());
  };


  return (
    <header className={styles.header}>
      <span className={styles["header--left"]}>
        <DropDown dropDownItems={dropdownItems} />
        <ResetButton
          label="Сбросить фильтры"
          onClick={resetFilter}
        />
      </span>
      <DateDropdown onSelect={changePeriod} />
    </header>
  );
};

export default Header;
