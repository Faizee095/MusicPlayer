import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="app-shell relative flex h-screen overflow-hidden text-white">
      <Sidebar />
      <div className="app-main flex min-w-0 flex-1 flex-col">
        <Searchbar />

        <main className="hide-scrollbar flex-1 overflow-y-auto px-5 pb-36 sm:px-8">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0 pb-8">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="hidden xl:block">
            <TopPlay />
          </div>
          </div>
        </main>
      </div>

      {activeSong?.title && (
        <div className="fixed bottom-0 left-0 right-0 z-30 flex h-20 animate-slideup border-t border-white/10 bg-[#11121a]/95 shadow-[0_-20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl sm:h-24">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
