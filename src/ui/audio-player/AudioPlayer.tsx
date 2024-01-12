import React from "react";
import styles from "./AudioPlayer.module.css";
import DownloadIcon from "../../ui/icons/DownloadIcon";
import AudioControls from "./AudioControls";
import ProgressBar from "./ProgressBar";
import { AudioPlayerProps } from "../../types/types";
import { ResetButton } from "../resetButton";
import { useAudioPlayer } from "./useAudioPlayer";

const AudioPlayer: React.FC<AudioPlayerProps> = (props: AudioPlayerProps) => {
  const {
    audioData,
    audioRef,
    durationHandler,
    isLoading,
    onPause,
    onPlay,
    isPlaying,
    duration,
    onScrub,
    trackProgress,
    durationRef,
    onDownload,
    onStop,
    error,
  } = useAudioPlayer(props);

  return (
    <>
      <div className={styles.player}>
        {audioData && (
          <audio
            id={`player-${props.id}`}
            ref={audioRef}
            onDurationChange={(event) =>
              durationHandler(event.currentTarget.duration)
            }
          >
            <source
              type="audio/mpeg"
              src={audioData && URL.createObjectURL(audioData)}
            />
          </audio>
        )}
        <div className={styles.duration}>{duration}</div>
        <AudioControls
          isLoading={isLoading}
          onPlay={onPlay}
          onPause={onPause}
          isPlaying={isPlaying}
        />
        <ProgressBar
          onChange={(e) => onScrub(e.target.value)}
          value={trackProgress}
          max={
            durationRef.current ? durationRef.current : `${durationRef.current}`
          }
          durationRef={durationRef}
        />
        <button className={styles.download} onClick={onDownload}>
          <DownloadIcon />
        </button>
        {isPlaying && (
          <ResetButton
            visible={true}
            additionalClassName={styles.reset}
            onClick={onStop}
          />
        )}
      </div>
      {error && <span>Loading error</span>}
    </>
  );
};

export default AudioPlayer;
