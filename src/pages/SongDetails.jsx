import { useParams } from 'react-router-dom';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';
import { DetailsHeader, Error, Loader, SongCard } from '../components';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongDetails = () => {
  const { songid } = useParams();
  const { data, isFetching, error } = useGetSongDetailsQuery(songid);
  const dispatch = useDispatch();
  const song = data?.track || data?.song || data;
  const play = () => { dispatch(setActiveSong({ song, data: [song], i: 0 })); dispatch(playPause(true)); };
  return <section className="mt-8">{isFetching ? <Loader /> : error ? <Error error={error} /> : <><DetailsHeader songData={song} /><div className="flex flex-wrap items-center gap-8"><button type="button" onClick={play} className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-black hover:bg-cyan-300">▶ Play track</button><div><h2 className="text-xl font-semibold text-white">{song?.subtitle || song?.artists?.[0]?.name}</h2><p className="text-gray-400">{song?.title}</p></div></div></>}</section>;
};
export default SongDetails;
