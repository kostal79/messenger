import React, { useState } from "react";
import styles from "./DateRange.module.css";
import DatePicker from "react-datepicker";
import InputMask from "react-input-mask";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePeacker.css";
import { dateToString, fromMaskedStringToDate } from "./helpers";
import DateIcon from "../../../icons/DateIcon";
import { DateRangeProps } from "../../../../types/types";


const DateRange: React.FC<DateRangeProps> = ({
  changeHandler,
  label,
}: DateRangeProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const datepickerChangeHandler = (dates: [Date | null, Date | null]): void => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setInputValue(dateToString(start, end));
    changeHandler && changeHandler([start, end]);
  };

  const visibleHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    setVisible((prev) => !prev);
  };

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    setInputValue(value);
    const sd = fromMaskedStringToDate(value)[0]!;
    const ed = fromMaskedStringToDate(value)[1]!;
    setStartDate(sd);
    setEndDate(ed);
    changeHandler && changeHandler([sd, ed]);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles["input-box"]}>
        <div>
          <InputMask
            mask="99.99.99-99.99.99"
            maskChar={"_"}
            alwaysShowMask
            value={inputValue}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.icon} onClick={visibleHandler}>
          <DateIcon />
        </div>
      </div>
      {visible && (
        <DatePicker
          selected={startDate}
          onChange={datepickerChangeHandler}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      )}
    </div>
  );
};

export default DateRange;
