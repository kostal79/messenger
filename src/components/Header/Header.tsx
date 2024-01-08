import React, { useCallback } from "react";
import styles from "./Header.module.css";
import { DropDown } from "../../ui/dropDown";
import { DateDropdown } from "../../ui/dateDropdown";
import { ResetButton } from "../../ui/resetButton";
import { useAppDispatch } from "../../store/hooks";
import { resetCallType, setCallType, setPeriod } from "../../store/slices/paramsSlice";
import { ContentType, ParamsStateType } from "../../types/types";

const Header: React.FC = () => {
  const dropdownItems = ["Все типы", "Входящие", "Исходящие"];
  const dispatch = useAppDispatch();

  const changePeriod = useCallback((value: ContentType) => {
    dispatch(setPeriod(value));
  }, [dispatch])

  const resetFilter = useCallback(() => {
    dispatch(resetCallType());
  }, [dispatch])

  const callTypeHandler = useCallback((type: string) => {
    dispatch(setCallType(type as ParamsStateType["callType"]))
  }, [dispatch])

  return (
    <header className={styles.header}>
      <span className={styles["header--left"]}>
        <DropDown dropDownItems={dropdownItems} onSelect={callTypeHandler}/>
        <ResetButton label="Сбросить фильтры" onClick={resetFilter} />
      </span>
      <DateDropdown onSelect={changePeriod} />
    </header>
  );
};

export default Header;
