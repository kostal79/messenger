import React from "react";
import styles from "./DatePicker.module.css";
import {Arrow} from "../../arrow";
import { isDatesType, isPeriodType } from "./helpers";
import clsx from "clsx";
import DateIcon from "../../icons/DateIcon";
import { DatePickerProps, defaultPeriod } from "../../../types/types";

const DatePicker: React.FC<DatePickerProps> = ({
  additionalClassName,
  content = defaultPeriod,
  onClickLeftButton,
  onClickRightButton,
  onClickContent,
  "data-testid": testId,
}) => {
  const textContent: string = isPeriodType(content)
    ? content
    : isDatesType(content)
    ? `${content.from}-${content.to}`
    : "";
  const className: string = clsx(styles.container, additionalClassName);
  return (
    <div className={className} data-testid={testId}>
      <Arrow
        direction="left"
        additionalClassname={styles["button--left"]}
        onClick={onClickLeftButton}
      />
      <button className={styles["button--center"]} onClick={onClickContent}>
        <div className={styles["calendar-icon"]}>
          <DateIcon />
        </div>
        <span>{textContent}</span>
      </button>
      <Arrow
        direction="right"
        additionalClassname={styles["button--right"]}
        onClick={onClickRightButton}
      />
    </div>
  );
};

export default DatePicker;
