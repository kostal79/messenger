import React, { useCallback } from "react";
import styles from "./Header.module.css";
import { DropDown } from "../../ui/dropDown";
import { DateDropdown } from "../../ui/dateDropdown";
import { ResetButton } from "../../ui/resetButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { resetCallType, resetPage, setCallType, setOrder, setPeriod, setSortBy } from "../../store/slices/paramsSlice";
import { ContentType, ParamsStateType } from "../../types/types";

const Header: React.FC = () => {
  const dropdownItems = ["Все типы", "Входящие", "Исходящие"];
  const dispatch = useAppDispatch();

  const changePeriod = useCallback((value: ContentType) => {
    dispatch(resetPage())
    dispatch(setPeriod(value));
  }, [dispatch])

  const resetFilter = useCallback(() => {
    dispatch(resetPage())
    dispatch(resetCallType());
    dispatch(setOrder("DESC"))
    dispatch(setSortBy("date"))
  }, [dispatch])

  const callTypeHandler = useCallback((type: string) => {
    dispatch(resetPage())
    dispatch(setCallType(type as ParamsStateType["callType"]))
  }, [dispatch])

  const callType = useAppSelector(state => state.data.callType)

  const isVisible = callType !== "Все типы";

  return (
    <header className={styles.header}>
      <span className={styles["header--left"]}>
        <DropDown dropDownItems={dropdownItems} onSelect={callTypeHandler}/>
        {isVisible && <ResetButton label="Сбросить фильтры" onClick={resetFilter} />}
      </span>
      <DateDropdown onSelect={changePeriod} />
    </header>
  );
};

export default Header;
