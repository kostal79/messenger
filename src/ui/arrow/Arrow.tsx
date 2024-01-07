import React from "react";
import styles from "./Arrow.module.css";
import clsx from "clsx";
import Tag from "../tag/Tag";
import {
  ArrowProps,
  defaultColor,
  defaultDirection,
  defaultTag,
} from "../../types/types";

const Arrow: React.FC<ArrowProps> = ({
  additionalClassname,
  onClick,
  direction = defaultDirection,
  color = defaultColor,
  as: TagName = defaultTag,
  "data-testid": testId,
}: ArrowProps) => {
  const className: string = clsx(styles.button, additionalClassname, {
    [styles["direction--down"]]: direction === "down",
    [styles["direction--up"]]: direction === "up",
    [styles["direction--left"]]: direction === "left",
    [styles["direction--right"]]: direction === "right",
    [styles["color--grey"]]: color === "grey",
    [styles["color--blue"]]: color === "blue",
  });
  return (
    <Tag
      as={TagName}
      className={className}
      onClick={onClick}
      data-testid={testId}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Property 1=expand_less_black_24dp 1"
          clipPath="url(#clip0_60_3537)"
        >
          <path
            id="Vector"
            d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
            fill="#ADBFDF"
          />
        </g>
        <defs>
          <clipPath id="clip0_60_3537">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Tag>
  );
};

export default Arrow;
