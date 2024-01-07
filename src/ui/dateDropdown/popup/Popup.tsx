import React from "react";
import styles from "./Popup.module.css";
import PopupItem from "./popupItem/PopupItem";
import clsx from "clsx";
import { PopupProps } from "../../../types/types";


const Popup: React.FC<PopupProps> = ({
  items,
  additionalClassName,
}: PopupProps) => {
  const className = clsx(styles.container, additionalClassName);
  const content = items?.map((item) => {
    return (
      <div key={item.key}>
        <PopupItem {...item} key={item.key} />
      </div>
    );
  });
  return (
    <div className={className}>
      <ul className={styles.list}>{content}</ul>
    </div>
  );
};

export default Popup;
