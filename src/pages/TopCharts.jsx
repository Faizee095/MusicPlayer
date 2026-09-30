import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || data?.results || [];
  return <section className="mt-8"><h1 className="mb-8 text-3xl font-bold text-white">Recommended tracks</h1>{isFetching ? <Loader /> : error ? <Error error={error} /> : <div className="flex flex-wrap justify-center gap-8 sm:justify-start">{songs.map((song, i) => <SongCard key={song.key || song.id || i} song={song.track || song} data={songs} i={i} />)}</div>}</section>;
};
export default TopCharts;
