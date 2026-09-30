import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { Link } from 'react-router-dom';

const TopPlay = () => {
  const { data } = useGetTopChartsQuery();
  const songs = Array.isArray(data) ? data : data?.tracks?.hits || data?.tracks || [];
  return <aside className="soft-panel sticky top-24 mt-7 rounded-2xl p-5"><p className="eyebrow mb-2">Keep listening</p><h2 className="mb-4 text-lg font-semibold text-white">You may also like</h2><div className="flex flex-col gap-1">{songs.slice(0, 5).map((entry, i) => { const song = entry.track || entry; return <Link key={song.key || song.id || i} to={`/songs/${encodeURIComponent(song.key || song.id || '')}`} className="flex min-w-0 items-center gap-3 rounded-xl p-2 transition hover:bg-white/[.06]"><img src={song.images?.coverart || song.images?.cover || ''} alt="" className="h-12 w-12 rounded-xl bg-white/5 object-cover" /><span className="min-w-0"><span className="block truncate text-[13px] font-medium text-gray-100">{song.title || song.name}</span><span className="mt-1 block truncate text-[11px] text-gray-500">{song.subtitle}</span></span><span className="ml-auto text-[10px] text-gray-600">0{i + 1}</span></Link>; })}{!songs.length && <p className="text-sm text-gray-500">Your mix is getting ready.</p>}</div></aside>;
};
export default TopPlay;
