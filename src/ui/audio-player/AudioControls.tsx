import React from "react";
import styles from "./AudioPlayer.module.css";
import PlayIcon from "../../ui/icons/PlayIcon";
import PauseIcon from "../../ui/icons/PauseIcon";
import { AudioControlsProps } from "../../types/types";

const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlay,
  onPause,
}: AudioControlsProps) => {
  return (
    <div>
      {!isPlaying && (
        <button
          className={styles["play-button"]}
          onClick={onPlay}
          aria-label="play"
        >
          <PlayIcon />
        </button>
      )}
      {isPlaying && (
        <button
          className={styles["pause-button"]}
          onClick={onPause}
          aria-label="pause"
        >
          <PauseIcon />
        </button>
      )}
    </div>
  );
};

export default AudioControls;
