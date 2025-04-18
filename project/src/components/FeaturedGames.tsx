import React from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Game } from '../types';

interface FeaturedGamesProps {
  games: Game[];
  onGameSelect: (game: Game) => void;
}

const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games, onGameSelect }) => {
  const featuredGames = games.filter(game => game.featured);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredGames.length) % featuredGames.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (featuredGames.length === 0) return null;

  const currentGame = featuredGames[currentIndex];

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl mb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out transform scale-105"
        style={{ backgroundImage: `url(${currentGame.imageUrl})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white z-10">
        <div className="max-w-4xl">
          <div className="flex items-center mb-2">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold mr-2">Featured</span>
            <span className="text-xs opacity-75">
              {currentGame.genre.join(" • ")}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentGame.title}</h2>
          <p className="text-sm md:text-base mb-6 opacity-90 max-w-2xl line-clamp-2 md:line-clamp-3">
            {currentGame.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onGameSelect(currentGame)}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-medium transition-all"
            >
              View Details
            </button>
            <a 
              href={currentGame.downloadUrl}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Download size={18} className="mr-2" />
              Download Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGames;