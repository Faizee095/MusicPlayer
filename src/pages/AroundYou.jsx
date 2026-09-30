import { useGetCountryChartsQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';

const AroundYou = () => {
  const { data, isFetching, error } = useGetCountryChartsQuery();
  const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || data?.results || [];
  return <section className="mt-8"><h1 className="mb-2 text-3xl font-bold text-white">Around You</h1><p className="mb-8 text-gray-400">Popular picks and related tracks</p>{isFetching ? <Loader /> : error ? <Error error={error} /> : <div className="flex flex-wrap justify-center gap-8 sm:justify-start">{songs.map((song, i) => <SongCard key={song.key || song.id || i} song={song.track || song} data={songs} i={i} />)}</div>}</section>;
};
export default AroundYou;
