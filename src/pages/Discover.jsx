import { useState } from 'react';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetGenreChartsQuery } from '../redux/services/shazamCore';
import { useDispatch } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const Discover = () => {
  const [genre, setGenre] = useState('POP');
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetGenreChartsQuery(genre);
  const genreTitle = genres.find((item) => item.value === genre)?.title || 'Pop';
  const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || data?.results || [];
  const featured = songs[0]?.track || songs[0];
  const playFeatured = () => { if (featured) { dispatch(setActiveSong({ song: featured, data: songs.map((item) => item.track || item), i: 0 })); dispatch(playPause(true)); } };

  return (
    <div className="flex flex-col pt-7">
      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="eyebrow mb-3">Your daily listening room</p><h1 className="page-title text-white">Find your<br className="sm:hidden" /> next favorite.</h1></div>
        <label className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-white/[.035] px-4 py-2.5 text-xs text-gray-400">Mood<select
          onChange={(event) => { setGenre(event.target.value); dispatch(selectGenreListId(event.target.value)); }}
          value={genre}
          className="cursor-pointer bg-transparent text-sm font-medium text-white outline-none"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select></label>
      </div>

      {!isFetching && !error && featured && <section className="relative mb-10 min-h-[245px] overflow-hidden rounded-[26px] border border-white/[.08] bg-[#191723] sm:min-h-[290px]">
        {featured.images?.coverart && <img src={featured.images.coverart} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,14,22,.97)_0%,rgba(15,14,22,.79)_46%,rgba(15,14,22,.12)_100%)]" />
        <div className="relative flex min-h-[245px] max-w-xl flex-col items-start justify-center p-7 sm:min-h-[290px] sm:p-10">
          <span className="mb-4 rounded-full border border-[#f0b487]/35 bg-[#e6a777]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#f0b487]">Featured track · {genreTitle}</span>
          <h2 className="line-clamp-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{featured.title || featured.name}</h2>
          <p className="mt-2 text-sm text-gray-300">{featured.subtitle || featured.artists?.[0]?.name}</p>
          <button type="button" onClick={playFeatured} className="mt-6 rounded-full bg-[#f0b487] px-5 py-2.5 text-sm font-bold text-[#17120f] transition hover:bg-[#ffd0a8]">▶ <span className="ml-1">Play now</span></button>
        </div>
      </section>}

      <div className="mb-5 flex items-end justify-between"><div><p className="eyebrow mb-2">A fresh rotation</p><h2 className="text-xl font-semibold text-white">Discover {genreTitle}</h2></div><span className="text-xs text-gray-500">{songs.length ? `${songs.length} tracks` : ''}</span></div>

      {isFetching ? <Loader title="Loading songs…" /> : error ? <Error message="Could not load songs. Check your RapidAPI subscription and connection, then try again." error={error} /> : (
        <div className="flex flex-wrap justify-start gap-x-5 gap-y-7 sm:gap-x-6">
          {songs.map((song, i) => <SongCard key={song.key || song.id || i} song={song.track || song} i={i} data={songs} />)}
          {!songs.length && <p className="text-gray-300">No songs found for this genre.</p>}
        </div>
      )}
    </div>
  );
};

export default Discover;
