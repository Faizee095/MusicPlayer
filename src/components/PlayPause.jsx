import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const PlayPause = ({ isPlaying, activeSong, song, data, i }) => {
  const dispatch = useDispatch();
  const selected = activeSong?.key === song?.key;
  const click = () => {
    if (selected) dispatch(playPause(!isPlaying));
    else { dispatch(setActiveSong({ song, data, i })); dispatch(playPause(true)); }
  };
  return <button type="button" onClick={click} aria-label={selected && isPlaying ? 'Pause song' : 'Play song'} className="rounded-full bg-cyan-500 px-3 py-2 font-bold text-black hover:bg-cyan-300">{selected && isPlaying ? '❚❚' : '▶'}</button>;
};
export default PlayPause;
