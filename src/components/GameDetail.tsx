import React, { useRef, useEffect } from 'react';
import { X, Download, Star, Calendar, User, HardDrive, Share2 } from 'lucide-react';
import { Game } from '../types';

interface GameDetailProps {
  game: Game;
  onClose: () => void;
}

const GameDetail: React.FC<GameDetailProps> = ({ game, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col animate-fadeIn"
      >
        <div className="relative h-72 md:h-96 w-full">
          <img 
            src={game.imageUrl} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold">{game.title}</h2>
              <div className="flex items-center bg-yellow-500/90 px-3 py-1 rounded-full">
                <Star size={18} className="mr-1" fill="currentColor" />
                <span className="font-bold">{game.rating}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {game.genre.map((genre, index) => (
                <span key={index} className="bg-blue-600/80 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <Calendar size={20} className="text-blue-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Release Date</p>
                <p className="text-gray-900 dark:text-gray-100">{game.releaseDate}</p>
              </div>
            </div>
            <div className="flex items-center">
              <User size={20} className="text-blue-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Developer</p>
                <p className="text-gray-900 dark:text-gray-100">{game.developer}</p>
              </div>
            </div>
            <div className="flex items-center">
              <HardDrive size={20} className="text-blue-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Size</p>
                <p className="text-gray-900 dark:text-gray-100">{game.size}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Description</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {game.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={game.downloadUrl} 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Now
            </a>
            <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors">
              <Share2 size={20} className="mr-2" />
              Share Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;