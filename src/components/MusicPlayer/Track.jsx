import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_8s_linear_infinite]' : ''} mr-3 h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#26242b] sm:mr-4 sm:h-14 sm:w-14`}>
      <img src={activeSong?.images?.coverart || activeSong?.images?.cover || ''} alt="cover art" className="h-full w-full object-cover" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-[12px] font-semibold text-white sm:text-sm">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="mt-1 truncate text-[10px] text-gray-500 sm:text-xs">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
