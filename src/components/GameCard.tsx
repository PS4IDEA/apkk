import React from 'react';
import { Download, Star } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
      onClick={() => onClick(game)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={game.imageUrl} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {game.featured && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{game.title}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{game.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          {game.description}
        </p>
        <div className="mt-auto">
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>{game.genre.slice(0, 2).join(', ')}</span>
            <span>{game.size}</span>
          </div>
          <button 
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = game.downloadUrl;
            }}
          >
            <Download size={16} className="mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;