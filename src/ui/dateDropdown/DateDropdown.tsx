import React, { useState } from "react";
import styles from "./DateDropdown.module.css";
import dateFormat from "dateformat";
import {  DatePicker  } from "./date-picker";
import DateRange from "./date-picker/date-range/DateRange";
import { Popup } from "./popup";
import { DateDropdownT, PopupItemProps, SelectionStateType, periods } from "../../types/types";



const DateDropdown: React.FC<DateDropdownT> = ({ onSelect }: DateDropdownT) => {
  const [activeSelection, setActiveSelection] = useState<SelectionStateType>({
    value: periods[0],
    index: 0,
  });
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const popupVisibleHandler = () => setPopupVisible((prev) => !prev);

  const prevPeriod = () => {
    let currentIndex = activeSelection.index;
    const maxIndex = periods.length - 1;
    if (currentIndex <= 0) {
      currentIndex = maxIndex;
    } else {
      currentIndex--;
    }
    setActiveSelection({ value: periods[currentIndex], index: currentIndex });
    if (onSelect) onSelect(periods[currentIndex]);
  };

  const nextPeriod = () => {
    let currentIndex = activeSelection.index;
    const maxIndex = periods.length - 1;
    if (currentIndex === maxIndex) currentIndex = 0;
    else currentIndex++;
    setActiveSelection({ value: periods[currentIndex], index: currentIndex });
    onSelect && onSelect(periods[currentIndex]);
  };

  const dropdownItems: PopupItemProps[] = periods.map((period, index) => {
    const clickHandler = () => {
      setActiveSelection({ value: period, index });
      setPopupVisible(false);
      onSelect && onSelect(period);
    };
    return {
      content: period,
      active: activeSelection.value === period,
      onClick: clickHandler,
      key: period,
    };
  });

  dropdownItems.push({
    content: (
      <DateRange
        changeHandler={(dates) => {
          if (dates[0] && dates[1]) {
            setActiveSelection({
              value: {
                from: dateFormat(dates[0], "dd.mm.yy"),
                to: dateFormat(dates[1], "dd.mm.yy"),
              },
              index: -1,
            });
            setPopupVisible(false);
            onSelect &&
              onSelect({
                from: dateFormat(dates[0], "dd.mm.yy"),
                to: dateFormat(dates[1], "dd.mm.yy"),
              });
          }
        }}
        label="Указать даты"
      />
    ),
    key: "selected period",
  });

  return (
    <div className={styles["date-dropdown__container"]}>
      <DatePicker
        content={activeSelection.value}
        onClickContent={popupVisibleHandler}
        onClickLeftButton={prevPeriod}
        onClickRightButton={nextPeriod}
      />
      {popupVisible && (
        <Popup
          additionalClassName={styles["date-dropdown__popup"]}
          items={dropdownItems}
        />
      )}
    </div>
  );
};

export default DateDropdown;
