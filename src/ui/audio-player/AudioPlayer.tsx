import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import DownloadIcon from "../../ui/icons/DownloadIcon";
import { toReadableTime } from "./helpers";
import AudioControls from "./AudioControls";
import ProgressBar from "./ProgressBar";
import { AudioPlayerProps, GetAudioParams } from "../../types/types";
import { getAudio } from "../../services/audio";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCanPlay } from "../../store/slices/audioSlice";

const AudioPlayer: React.FC<AudioPlayerProps> = ({record, partnership_id, id}: AudioPlayerProps) => {
  const canPlay = useAppSelector((state) => state.audio.canPlay);
  const dispatch = useAppDispatch();
  const [audioData, setAudioData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef: React.MutableRefObject<HTMLAudioElement | null> =
    useRef(null);
  const intervalRef: React.MutableRefObject<NodeJS.Timeout | undefined> =
    useRef();
  const durationRef: React.MutableRefObject<number> = useRef(0);
  const [duration, setDuration] = useState<any>("--:--");
  const [trackProgress, setTrackProgress] = useState(0);

  async function fetchTrack(params: GetAudioParams) {
    try {
      setIsLoading(true);
      const data = await getAudio(params);
      setAudioData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
      clearInterval(intervalRef!.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef!.current);
    };
  }, []);

  const durationHandler = (time: number) => {
    durationRef.current = time;
    setDuration(toReadableTime(time));
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const currentTime = Math.floor(audioRef.current!.currentTime);
      const lastedTime = Math.floor(durationRef.current - currentTime);

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
    audioRef.current!.currentTime = value;
    setTrackProgress(audioRef.current!.currentTime);
    setDuration(toReadableTime(Math.floor(durationRef.current - value)));
    startTimer();
  };

  const onPlay = useCallback(() => {
    dispatch(setCanPlay(id))
    if (!audioData) {
      fetchTrack({record, partnership_id}).then(() => setIsPlaying(true));
    } else {
      setIsPlaying(true);
    }
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (canPlay !== id) {
      onPause();
    }
  }, [canPlay])

  const onDownload = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(audioData);
    link.download = `audio-${Date.now().toString()}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={styles.player}>
        {audioData && (
          <audio
          id={`player-${id}`}
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
      </div>
      {error && <span>Loading error</span>}
    </>
  );
};

export default AudioPlayer;
