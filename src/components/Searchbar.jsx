import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';

const Searchbar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const submit = (event) => { event.preventDefault(); const query = term.trim(); if (query) navigate(`/search/${encodeURIComponent(query)}`); };
  return <header className="sticky top-0 z-10 flex min-w-0 items-center gap-4 border-b border-white/[.045] bg-[#0b0c12]/80 px-5 py-4 backdrop-blur-xl sm:px-8">
    <form onSubmit={submit} className="flex w-full min-w-0 max-w-2xl flex-1 items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.035] px-4 py-3 text-gray-400 transition focus-within:border-[#e6a777]/50 focus-within:bg-white/[.055]">
      <HiOutlineSearch className="shrink-0" size={20} /><input aria-label="Search songs or artists" value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Search songs, artists..." className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500" />
    </form>
    <span className="hidden text-right sm:block"><span className="block text-xs font-semibold text-gray-300">Find your frequency</span><span className="mt-1 block text-[10px] uppercase tracking-[.18em] text-gray-600">A little more Vibes</span></span>
  </header>;
};

export default Searchbar;
