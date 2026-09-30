const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists?.[0] || artistData?.artist || artistData;
  const name = artist?.name || songData?.subtitle || songData?.artists?.[0]?.name || 'Artist';
  const image = artist?.avatar || artist?.images?.background || songData?.images?.coverart;
  return <div className="relative mb-10 flex min-h-64 items-end overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 to-cyan-900 p-8">
    {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
    <div className="relative z-10"><p className="mb-2 text-sm uppercase tracking-widest text-cyan-200">{artistId ? 'Artist' : 'Track details'}</p><h1 className="text-4xl font-bold text-white">{name}</h1>{songData?.title && <p className="mt-2 text-lg text-gray-200">{songData.title}</p>}</div>
  </div>;
};
export default DetailsHeader;
