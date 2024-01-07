import React from "react";
import styles from "../Popup.module.css";
import clsx from "clsx";
import { PopupItemProps } from "../../../../types/types";

const PopupItem: React.FC<PopupItemProps> = ({
  additionalClassName,
  active = false,
  content,
  disabled = false,
  onClick,
}: PopupItemProps) => {
  const className = clsx(styles["popup-item"], additionalClassName, {
    [styles["popup-item--active"]]: active,
    [styles["popup-item--disabled"]]: disabled,
  });
  if (typeof content !== "string") {
    return <li className={styles.node}>{content}</li>;
  }
  return (
    <li className={className}>
      <button className={styles.button} onClick={onClick}>
        <span>{content}</span>
      </button>
    </li>
  );
};

export default PopupItem;
