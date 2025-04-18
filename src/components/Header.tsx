import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">GameVault</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">New Releases</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">About</a>
            </nav>

            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all"
              />
              <Search className="absolute left-3 text-gray-500 dark:text-gray-400" size={18} />
            </div>

            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="text-gray-700 dark:text-gray-200" /> : <Menu size={24} className="text-gray-700 dark:text-gray-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
              </div>
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2 dark:text-gray-200 dark:hover:text-blue-400">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2 dark:text-gray-200 dark:hover:text-blue-400">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2 dark:text-gray-200 dark:hover:text-blue-400">New Releases</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2 dark:text-gray-200 dark:hover:text-blue-400">About</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;