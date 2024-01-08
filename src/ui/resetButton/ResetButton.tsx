import React, { memo } from "react";
import styles from "./ResetButton.module.css";
import clsx from "clsx";
import { ResetButtonProps } from "../../types/types";
import { useAppSelector } from "../../store/hooks";

const ResetButton: React.FC<ResetButtonProps> = ({
  additionalClassName,
  onClick,
  label,
  visible,
  "data-testid": testId,
}: ResetButtonProps) => {
  const reduxVisible = useAppSelector(state => state.data.callType)
  if (!visible && reduxVisible === "Все типы" ) return;
  const className = clsx(styles["reset__button"], additionalClassName);
  return (
    <button className={className} onClick={onClick} data-testid={testId}>
      {label && <span>{label}</span>}
      <div className={styles["reset__icon"]}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 0.88125L7.86875 0L4.375 3.49375L0.88125 0L0 0.88125L3.49375 4.375L0 7.86875L0.88125 8.75L4.375 5.25625L7.86875 8.75L8.75 7.86875L5.25625 4.375L8.75 0.88125Z"
            fill="#ADBFDF"
          />
        </svg>
      </div>
    </button>
  );
};

export default memo(ResetButton);
