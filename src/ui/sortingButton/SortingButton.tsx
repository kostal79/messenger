import React, { useState } from "react";
import styles from "./SortingButton.module.css";
import { Arrow } from "../arrow";
import { SortingButtonProps } from "../../types/types";



const SortingButton: React.FC<SortingButtonProps> = ({
  label,
  onClick,
  'data-testid': testId,
}: SortingButtonProps) => {
  const [isDefault, setIsDefault] = useState<boolean>(true);

  const clickToggler: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsDefault((prev) => !prev);
    if (onClick) onClick(e);
  };
  return (
    <div className={styles["sorting__container"]} data-testid={testId}>
      <label className={styles["sorting__label"]}>{label}</label>
      <Arrow additionalClassname={styles["sorting__arrow"]} direction={isDefault ? "down" : "up"} onClick={clickToggler}/>
    </div>
  );
};

export default SortingButton;
