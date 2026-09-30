import { NavLink } from 'react-router-dom';
import { links } from '../assets/constants';
import { logo } from '../assets';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const hasPlayer = useSelector((state) => Boolean(state.player.activeSong?.title));
  return <>
  <aside className="hidden h-full w-60 shrink-0 flex-col border-r border-white/[.06] bg-[#090a0f]/70 px-6 py-8 md:flex">
    <NavLink to="/" className="mb-14 flex items-center gap-3"><img src={logo} alt="Vibes" className="w-32" /><span className="rounded-full border border-[#e6a777]/30 px-2 py-1 text-[9px] font-semibold uppercase tracking-[.18em] text-[#e6a777]">Music</span></NavLink>
    <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[.22em] text-gray-500">Your space</p>
    <nav className="flex flex-col gap-1.5">{links.map(({ name, to, icon: Icon }) => <NavLink key={name} to={to} end={to === '/'} className={({ isActive }) => `group flex items-center gap-4 rounded-xl px-3 py-3 text-[14px] font-medium transition ${isActive ? 'bg-[#e6a777]/10 text-[#f0b487]' : 'text-gray-400 hover:bg-white/[.045] hover:text-white'}`}><Icon size={20} /><span>{name}</span></NavLink>)}</nav>
    <div className="mt-auto rounded-2xl border border-white/[.07] bg-white/[.025] p-4"><p className="text-sm font-semibold text-white">Made for your mood</p><p className="mt-1 text-xs leading-5 text-gray-500">Find a sound, settle in, and let it play.</p></div>
  </aside>
  {!hasPlayer && <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-white/[.08] bg-[#0d0e15]/95 px-2 pb-[max(.55rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">{links.map(({ name, to, icon: Icon }) => <NavLink key={name} to={to} end={to === '/'} aria-label={name} className={({ isActive }) => `flex flex-col items-center gap-1 px-2 text-[10px] ${isActive ? 'text-[#f0b487]' : 'text-gray-500'}`}><Icon size={20} /><span>{name}</span></NavLink>)}</nav>}
</>;
};

export default Sidebar;
