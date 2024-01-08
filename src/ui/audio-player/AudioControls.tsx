import React from "react";
import styles from "./AudioPlayer.module.css";
import PlayIcon from "../../ui/icons/PlayIcon";
import PauseIcon from "../../ui/icons/PauseIcon";
import { AudioControlsProps } from "../../types/types";

const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlay,
  onPause,
  isLoading,
}: AudioControlsProps) => {
  return (
    <div>
      {!isPlaying && (
        <button
          className={styles["play-button"]}
          onClick={onPlay}
          aria-label="play"
        >
          {!isLoading && <PlayIcon />}
          {isLoading && <span className={styles.loader}></span>}
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
