import React, { useState } from "react";
import styles from "./DropDown.module.css";
import { Arrow } from "../arrow";
import clsx from "clsx";
import { DropDownProps, TypesCallForDropdownT } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCallType } from "../../store/slices/paramsSlice";

const DropDown: React.FC<DropDownProps> = ({
  dropDownItems,
  additionalClassName,
  onSelect,
  "date-testid": testId,
}: DropDownProps) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.data.callType);
  const [visible, setVisible] = useState<boolean>(false);

  const containerClassName = clsx(
    styles["dropdown__container"],
    additionalClassName
  );

  const visibleToggler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setVisible((prev) => !prev);
  };

  const dropDownMenu = dropDownItems.map((item) => {
    const clickHandler: React.MouseEventHandler<HTMLLIElement> = () => {
      dispatch(setCallType(item as TypesCallForDropdownT));
      if (onSelect) onSelect(item);
      setVisible(false);
    };
    return (
      <li
        className={clsx(styles["dropdown__li"], {
          [styles["dropdown__li--active"]]: item === value,
        })}
        key={item}
        role="listitem"
        onClick={clickHandler}
      >
        {item}
      </li>
    );
  });

  return (
    <div className={containerClassName} date-testid={testId}>
      <button
        className={styles["dropdown__button"]}
        onClick={visibleToggler}
        role="combobox"
      >
        <span className={styles["dropdown-value"]}>
          {value}
        </span>
        <Arrow
          as="div"
          direction={visible ? "up" : "down"}
          color={visible ? "blue" : "grey"}
        />
      </button>
      {visible && (
        <ul className={styles["dropdown__list"]} role="listbox">
          {dropDownMenu}
        </ul>
      )}
    </div>
  );
};

export default React.memo(DropDown);
