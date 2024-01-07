import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import DownloadIcon from "../../ui/icons/DownloadIcon";
import { toReadableTime } from "./helpers";
import AudioControls from "./AudioControls";
import ProgressBar from "./ProgressBar";
import { AudioPlayerProps } from "../../types/types";



const AudioPlayer: React.FC<AudioPlayerProps> = ({
  track,
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef: React.MutableRefObject<HTMLAudioElement> = useRef(
    new Audio(track)
  );

  const intervalRef: React.MutableRefObject<NodeJS.Timeout | undefined> =
    useRef();
  const durationRef: React.MutableRefObject<number> = useRef(0);
  const [duration, setDuration] = useState<string>("00:00");
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const loadMetadata = () => {
      try {
        audioRef.current.addEventListener("loadedmetadata", () => {
          const time = Math.round(audioRef.current.duration);
          durationRef.current = time;
          setDuration(toReadableTime(time));
        });
      } catch (error) {
        console.error("Error loading audio metadata:", error);
      }
    };

    loadMetadata();

    return () => {
      audioRef.current.removeEventListener("loadedmetadata", () => {});
    };
  }, [audioRef.current]);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const currentTime = Math.floor(audioRef.current.currentTime);
      const lastedTime = durationRef.current - currentTime;
      setTrackProgress(currentTime);
      setDuration(toReadableTime(lastedTime));
      if (lastedTime === 0) {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setTrackProgress(0);
          setDuration(toReadableTime(durationRef.current));
          setIsPlaying(false);
        }, 1000);
      }
    }, 1000);
  };

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
    setDuration(toReadableTime(Math.floor(durationRef.current - value)));
    startTimer();
  };

  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const onDownload = () => {
    const link = document.createElement("a");
    link.href = track;
    link.download = `audio-${Date.now().toString()}.mp3` ; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.player}>
      {duration && <div className={styles.duration}>{duration}</div>}
      <AudioControls onPlay={onPlay} onPause={onPause} isPlaying={isPlaying} />
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
    </div>
  );
};

export default AudioPlayer;
