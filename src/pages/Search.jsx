import { useParams } from 'react-router-dom';
import { useSearchSongsQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';

const Search = () => {
  const { searchTerm = '' } = useParams();
  const term = searchTerm;
  const { data, isFetching, error } = useSearchSongsQuery(term, { skip: !term });
  const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || data?.results || [];
  return <section className="mt-8"><h1 className="mb-8 text-3xl font-bold text-white">Results for <span className="text-cyan-300">{term}</span></h1>{isFetching ? <Loader title="Searching…" /> : error ? <Error error={error} /> : <div className="flex flex-wrap justify-center gap-8 sm:justify-start">{songs.map((item, i) => { const song = item.track || item; return <SongCard key={song.key || song.id || i} song={song} data={songs} i={i} />; })}{!songs.length && <p className="text-gray-300">No matches found. Try another search.</p>}</div>}</section>;
};
export default Search;
