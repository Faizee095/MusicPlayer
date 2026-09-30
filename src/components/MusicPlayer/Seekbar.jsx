import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden w-full max-w-2xl flex-row items-center sm:flex">
      <p className="w-9 text-right text-[10px] tabular-nums text-gray-500">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        aria-label="Track progress"
        className="mx-3 h-1 flex-1 cursor-pointer rounded-lg accent-[#f0b487]"
      />
      <p className="w-9 text-[10px] tabular-nums text-gray-500">{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
