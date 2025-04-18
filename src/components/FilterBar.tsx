import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  genres,
  selectedGenre,
  onGenreChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
      <div className="flex-1">
        <label htmlFor="genre-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Genre
        </label>
        <div className="relative">
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Sort By
        </label>
        <div className="relative">
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            <option value="rating">Highest Rated</option>
            <option value="newest">Release Date (Newest)</option>
            <option value="oldest">Release Date (Oldest)</option>
            <option value="alphabetical">Alphabetical (A-Z)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;