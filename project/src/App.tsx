import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameDetail from './components/GameDetail';
import FeaturedGames from './components/FeaturedGames';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import { games, getAllGenres } from './data/games';
import { Game } from './types';
import { filterGamesByGenre, filterGamesBySearch, sortGames } from './utils/gameUtils';

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
  };

  const closeGameDetail = () => {
    setSelectedGame(null);
  };

  // Apply filters and sorting
  const filteredGames = sortGames(
    filterGamesBySearch(
      filterGamesByGenre(games, selectedGenre),
      searchQuery
    ),
    sortBy
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header 
        onSearchChange={handleSearchChange} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main className="container mx-auto px-4 pt-24">
        <FeaturedGames games={games} onGameSelect={handleGameSelect} />
        
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-6">Browse Games</h2>
          <FilterBar
            genres={getAllGenres()}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGames.map(game => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onClick={handleGameSelect} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No games found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      {selectedGame && (
        <GameDetail game={selectedGame} onClose={closeGameDetail} />
      )}
    </div>
  );
}

export default App;