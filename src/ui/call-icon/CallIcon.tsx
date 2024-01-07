import clsx from "clsx";
import { FC } from "react";
import styles from "./CallIcon.module.css";
import { CallIconProps, defaultType } from "../../types/types";

const CallIcon: FC<CallIconProps> = ({
  type = defaultType,
  "data-testid": dataTestId,
}: CallIconProps) => {
  const className: string = clsx(styles.icon, {
    [styles["type--incoming"]]: type === "incoming",
    [styles["type--outcoming"]]: type === "outcoming",
    [styles["type--missed"]]: type === "missed",
    [styles["type--non-call"]]: type === "non-call",
  });
  return (
    <div className={className} data-testid={dataTestId}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Property 1=incoming">
          <path
            id="Vector"
            d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
            fill="#002CFB"
          />
        </g>
      </svg>
    </div>
  );
};

export default CallIcon;
