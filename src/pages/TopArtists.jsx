import { useMemo } from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { ArtistCard, Error, Loader } from '../components';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const artists = useMemo(() => {
    const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || data?.results || [];
    const unique = new Map();
    songs.forEach((entry) => {
      const song = entry.track || entry;
      (song.artists || (song.subtitle ? [{ name: song.subtitle, adamid: song.artists?.[0]?.adamid, avatar: song.images?.coverart }] : [])).forEach((artist) => {
        const id = artist.adamid || artist.id || artist.name;
        if (id && !unique.has(id)) unique.set(id, artist);
      });
    });
    return [...unique.values()];
  }, [data]);
  return <section className="mt-8"><h1 className="mb-8 text-3xl font-bold text-white">Top Artists</h1>{isFetching ? <Loader /> : error ? <Error /> : <div className="flex flex-wrap justify-center gap-8 sm:justify-start">{artists.map((artist, i) => <ArtistCard key={artist.adamid || artist.id || i} artist={artist} />)}</div>}</section>;
};
export default TopArtists;
