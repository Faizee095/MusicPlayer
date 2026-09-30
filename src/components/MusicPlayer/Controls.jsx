import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <button type="button" aria-label="Toggle repeat" onClick={() => setRepeat((prev) => !prev)} className="hidden text-gray-500 transition hover:text-[#f0b487] sm:block"><BsArrowRepeat size={17} color={repeat ? '#f0b487' : 'currentColor'} /></button>
    {currentSongs?.length > 1 && <button type="button" aria-label="Previous track" className="text-gray-300 transition hover:text-white" onClick={handlePrevSong}><MdSkipPrevious size={25} /></button>}
    {isPlaying ? (
      <button type="button" aria-label="Pause" onClick={handlePlayPause} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0b487] text-xl text-[#17120f] transition hover:scale-105 hover:bg-[#ffd0a8]"><BsFillPauseFill /></button>
    ) : (
      <button type="button" aria-label="Play" onClick={handlePlayPause} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0b487] text-xl text-[#17120f] transition hover:scale-105 hover:bg-[#ffd0a8]"><BsFillPlayFill className="translate-x-px" /></button>
    )}
    {currentSongs?.length > 1 && <button type="button" aria-label="Next track" className="text-gray-300 transition hover:text-white" onClick={handleNextSong}><MdSkipNext size={25} /></button>}
    <button type="button" aria-label="Toggle shuffle" onClick={() => setShuffle((prev) => !prev)} className="hidden text-gray-500 transition hover:text-[#f0b487] sm:block"><BsShuffle size={16} color={shuffle ? '#f0b487' : 'currentColor'} /></button>
  </div>
);

export default Controls;
