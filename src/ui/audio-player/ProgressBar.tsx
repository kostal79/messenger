import React, { useRef } from "react";
import styles from "./AudioPlayer.module.css";
import { toReadableTime } from "./helpers";
import { ProgressBarProps } from "../../types/types";



const ProgressBar: React.FC<ProgressBarProps> = ({
  onChange,
  value,
  max,
  durationRef,
}: ProgressBarProps) => {
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const progressTimeRef: React.MutableRefObject<string | null> = useRef(null);
  const currentPercentage = durationRef.current
    ? `${(value / durationRef.current) * 100}%`
    : "0%";
  const trackStyling = `
      -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, var(--UI-blue)), color-stop(${currentPercentage}, var(--UI-Icon)))
    `;

  const onHoverHandler: React.MouseEventHandler<HTMLInputElement> = (event) => {
    if (inputRef.current) {
      let x: number = event.pageX - inputRef.current.offsetLeft;
      let percentage: number = x / inputRef.current.clientWidth;
      const progressTime: string = toReadableTime(
        percentage * durationRef.current
      );
      if (progressTime && progressTimeRef.current !== progressTime) {
        const prevP = document.querySelector("#progress-time");
        prevP?.remove();
        progressTimeRef.current = progressTime;
        const newP = document.createElement("p");
        newP.id = "progress-time";
        newP.style.position = "absolute";
        newP.style.top = (inputRef.current.offsetTop - 25).toString() + "px";
        newP.style.left = (event.pageX - 18).toString() + "px";
        newP.innerText = progressTime;
        document.body.append(newP);
      }
    }
  };

  const mouseLeaveHandler: React.MouseEventHandler<HTMLInputElement> = () => {
    const el = document.querySelector("#progress-time");
    if (el) el.remove();
  };

  return (
    <input
      type="range"
      className={styles["player-range"]}
      value={value}
      step="1"
      min="0"
      max={max}
      onChange={onChange}
      style={{ background: trackStyling }}
      onMouseMove={onHoverHandler}
      ref={inputRef}
      onMouseLeave={mouseLeaveHandler}
    />
  );
};

export default ProgressBar;
