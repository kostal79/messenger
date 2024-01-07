import React from "react";
import clsx from "clsx";
import styles from "./Badge.module.css";
import { BadgeProps, defaultStatus } from "../../types/types";

const Badge: React.FC<BadgeProps> = ({
  status = defaultStatus,
  additionalClassName,
  "data-testid": testId,
}: BadgeProps) => {
  const className: string = clsx(styles.box, additionalClassName!, {
    [styles["status--good"]]: status === "good",
    [styles["status--bad"]]: status === "bad",
    [styles["status--excellent"]]: status === "excellent",
  });
  return (
    <div className={className} data-testid={testId}>
      <span>
        {status === "bad" ? "Плохо" : status === "good" ? "Хорошо" : "Отлично"}
      </span>
    </div>
  );
};

export default Badge;
