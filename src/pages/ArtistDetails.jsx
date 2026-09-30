import { useParams } from 'react-router-dom';
import { useGetArtistSongsQuery } from '../redux/services/shazamCore';
import { DetailsHeader, Error, Loader, SongCard } from '../components';

const ArtistDetails = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetArtistSongsQuery(id, { skip: !id });
  const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || data?.songs || data?.results || [];
  const artist = data?.artist || songs[0]?.track?.artists?.[0] || songs[0]?.artists?.[0];
  return <section className="mt-8"><DetailsHeader artistId={id} artistData={artist} />{isFetching ? <Loader /> : error ? <Error error={error} /> : <div className="flex flex-wrap justify-center gap-8 sm:justify-start">{songs.map((entry, i) => { const song = entry.track || entry; return <SongCard key={song.key || song.id || i} song={song} data={songs.map((item) => item.track || item)} i={i} />; })}{!songs.length && <p className="text-gray-300">No tracks available for this artist.</p>}</div>}</section>;
};
export default ArtistDetails;
