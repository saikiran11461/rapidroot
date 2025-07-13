import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, isMenuOpen, toggleMenu }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(); // Close mobile menu after clicking
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/90' : 'bg-white/90'
    } backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            RapidRoot
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`block w-full text-left hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;