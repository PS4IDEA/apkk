import { Game } from '../types';

export const filterGamesByGenre = (games: Game[], genre: string): Game[] => {
  if (!genre) return games;
  
  return games.filter(game => game.genre.includes(genre));
};

export const filterGamesBySearch = (games: Game[], query: string): Game[] => {
  if (!query) return games;
  
  const lowerCaseQuery = query.toLowerCase();
  
  return games.filter(game => 
    game.title.toLowerCase().includes(lowerCaseQuery) ||
    game.description.toLowerCase().includes(lowerCaseQuery) ||
    game.genre.some(g => g.toLowerCase().includes(lowerCaseQuery)) ||
    game.developer.toLowerCase().includes(lowerCaseQuery)
  );
};

export const sortGames = (games: Game[], sortBy: string): Game[] => {
  const gamesCopy = [...games];
  
  switch (sortBy) {
    case 'rating':
      return gamesCopy.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return gamesCopy.sort((a, b) => 
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    case 'oldest':
      return gamesCopy.sort((a, b) => 
        new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      );
    case 'alphabetical':
      return gamesCopy.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return gamesCopy;
  }
};