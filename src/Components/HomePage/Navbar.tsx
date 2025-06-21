import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onLoginClick?: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];

  const handleLanguageChange = (langCode: string) => {
    // Here you would implement the language change logic
    console.log('Language changed to:', langCode);
  };

  return (
    <nav className="fixed w-full sm:w-[calc(100%-2.5rem)] z-50 bg-white border-b border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] top-0 sm:top-4 left-0 sm:left-1/2 sm:-translate-x-1/2 min-h-16 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 ">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Bloom</span>
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end sm:mr-8">
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">About</Link>
              <Link to="/shop" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Shop</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Contact</Link>
            </div>
          </div>

          {/* Right side buttons and icons (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:block relative group">
              <button className="text-gray-700 hover:text-pink-500 p-2 rounded-full hover:bg-pink-50 transition-all duration-300">
                <Globe className="h-6 w-6" />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="text-gray-700 hover:text-pink-500 p-2 relative group">
              <ShoppingCart className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                0
              </span>
            </Link>
            {/* Creative Login Button */}
            <button
              onClick={onLoginClick}
              className="relative overflow-hidden px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 shadow-lg border-2 border-white/30 
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-300 before:via-pink-400 before:to-pink-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-40
                hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              style={{ boxShadow: '0 4px 24px 0 rgba(236,72,153,0.18)' }}
            >
              <span className="relative z-10 tracking-wide drop-shadow">Login</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 rounded-full blur-sm opacity-80"></span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-500 p-2 rounded-md hover:bg-pink-50 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50" onClick={toggleMenu}>About</Link>
            <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50" onClick={toggleMenu}>Shop</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50" onClick={toggleMenu}>Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <button
                onClick={() => { onLoginClick && onLoginClick(); toggleMenu(); }}
                className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-full font-semibold shadow hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
