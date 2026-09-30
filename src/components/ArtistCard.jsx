import { Link } from 'react-router-dom';
const ArtistCard = ({ artist }) => {
  const name = artist?.name || artist?.title || 'Artist';
  const image = artist?.avatar || artist?.images?.background || artist?.images?.coverart;
  return <Link to={`/artists/${encodeURIComponent(name)}`} className="music-card group w-36 text-center"><div className="mx-auto mb-4 flex aspect-square w-32 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_25%,#c47965,#393054_58%,#171923)] ring-1 ring-white/10 transition group-hover:ring-2 group-hover:ring-[#f0b487]">{image ? <img src={image} alt={name} className="h-full w-full object-cover" /> : <span className="text-4xl font-light text-white/80">{name.charAt(0)}</span>}</div><span className="block truncate text-sm font-medium text-gray-200 group-hover:text-[#f0b487]">{name}</span></Link>;
};
export default ArtistCard;
