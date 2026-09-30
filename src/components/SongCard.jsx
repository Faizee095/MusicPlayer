import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const artwork = (song) => song?.images?.coverart || song?.images?.cover || song?.attributes?.artwork?.url?.replace('{w}', '500').replace('{h}', '500') || song?.hub?.image || '';
const title = (song) => song?.title || song?.attributes?.title || song?.name || 'Unknown track';
const artist = (song) => song?.subtitle || song?.artists?.[0]?.name || song?.attributes?.artist || 'Unknown artist';

const SongCard = ({ song, i, data }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const selected = activeSong?.key === song?.key && isPlaying;
  const play = () => { dispatch(setActiveSong({ song, data, i })); dispatch(playPause(true)); };
  return <article className="music-card group w-[calc(50%-0.75rem)] min-w-0 max-w-52 sm:w-44 md:w-48">
    <div className="cover-art relative overflow-hidden rounded-2xl bg-[#191923]">
      {artwork(song) ? <img src={artwork(song)} alt={`${title(song)} cover`} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.04]" /> : <div className="aspect-square bg-[radial-gradient(circle_at_30%_25%,#c47965,#393054_48%,#171923)]" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <button type="button" onClick={play} aria-label={`Play ${title(song)}`} className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0b487] text-xl text-[#17120f] shadow-xl transition hover:scale-105 hover:bg-[#ffd0a8]">{selected ? <BsFillPauseFill /> : <BsFillPlayFill className="translate-x-px" />}</button>
    </div>
    <Link to={`/songs/${encodeURIComponent(song?.key || song?.id || '')}`} className="mt-3 block truncate text-[14px] font-semibold text-gray-100 transition hover:text-[#f0b487]">{title(song)}</Link>
    <Link to={`/artists/${encodeURIComponent(song?.artists?.[0]?.name || song?.subtitle || '')}`} className="mt-1 block truncate text-xs text-gray-500 transition hover:text-gray-300">{artist(song)}</Link>
  </article>;
};

export default SongCard;
