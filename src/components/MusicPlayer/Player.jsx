/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef(null);
  const actions = activeSong?.hub?.actions || [];
  const audioUrl = actions.find((action) => action.type === 'audio')?.uri || actions[1]?.uri || actions.find((action) => action.uri)?.uri || activeSong?.hub?.options?.find((option) => option.actions?.[0]?.uri)?.actions?.[0]?.uri;
  useEffect(() => {
    if (!ref.current) return;
    if (isPlaying) ref.current.play().catch(() => {});
    else ref.current.pause();
  }, [isPlaying, audioUrl]);

  useEffect(() => {
    if (ref.current) ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (ref.current && Number.isFinite(Number(seekTime))) ref.current.currentTime = Number(seekTime);
  }, [seekTime]);

  return (
    <audio
      src={audioUrl}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
