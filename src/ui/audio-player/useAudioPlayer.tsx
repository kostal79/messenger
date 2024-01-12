import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AudioPlayerProps, GetAudioParams } from "../../types/types";
import { getAudio } from "../../services/audio";
import { toReadableTime } from "./helpers";
import { setCanPlay } from "../../store/slices/audioSlice";

export const useAudioPlayer = ({
  record,
  partnership_id,
  id,
}: AudioPlayerProps) => {
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
      return data;
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

  const durationHandler = useCallback((time: number) => {
    durationRef.current = time;
    setDuration(toReadableTime(time));
  }, []);

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

  const onScrub = useCallback((value: any) => {
    clearInterval(intervalRef.current);
    audioRef.current!.currentTime = value;
    setTrackProgress(audioRef.current!.currentTime);
    setDuration(toReadableTime(Math.floor(durationRef.current - value)));
    startTimer();
  }, []);

  const onPlay = useCallback(() => {
    dispatch(setCanPlay(id));
    if (!audioData) {
      fetchTrack({ record, partnership_id }).then(() => setIsPlaying(true));
    } else {
      setIsPlaying(true);
    }
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const onStop = useCallback(() => {
    setIsPlaying(false);
    setTrackProgress(0);
    audioRef.current!.currentTime = 0;
    setDuration(toReadableTime(durationRef.current));
  }, []);

  useEffect(() => {
    if (canPlay !== id) {
      onPause();
    }
  }, [canPlay]);

  const onDownload = useCallback(async () => {
    const link = document.createElement("a");
    try {
      link.href = audioData
        ? URL.createObjectURL(audioData)
        : await fetchTrack({ record, partnership_id }).then((audioData) =>{
           return URL.createObjectURL(audioData)
        }
          );
    } catch (error) {
      console.error(error);
    }
    link.download = `audio-${Date.now().toString()}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [record, partnership_id]);

  return {
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
  };
};
