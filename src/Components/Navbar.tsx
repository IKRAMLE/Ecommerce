import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Camera, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically handle the image upload and search
      console.log('Image uploaded:', file);
      // You can add your image search logic here
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ar', name: 'العربية' }
  ];

  const handleLanguageChange = (langCode: string) => {
    // Here you would implement the language change logic
    console.log('Language changed to:', langCode);
  };

  return (
    <nav className="fixed w-[calc(100%-2.5rem)] z-50 bg-white border-b border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] top-4 left-1/2 -translate-x-1/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.png" 
                alt="Movia Logo" 
                className="h-10 w-auto drop-shadow-lg "
              />
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex items-center justify-center px-4 lg:px-8">
            <div className="w-full max-w-lg">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-6 py-3 rounded-full bg-gray-50 text-gray-900 placeholder-gray-500 
                           outline-none ring-2 ring-orange-500/50 focus:ring-orange-500 focus:bg-white
                           transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button 
                    onClick={triggerImageUpload}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-300 p-1"
                    title="Search by image"
                  >
                    <Camera className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Right side buttons and icons */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="hidden md:block relative group">
              <button className="text-gray-700 hover:text-orange-500 p-2 rounded-full hover:bg-orange-50 
                               transition-all duration-300">
                <Globe className="h-6 w-6" />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white border border-gray-200 
                            shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 transform origin-top-right translate-x-2">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 
                               transition-all duration-300"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* User Icon with Dropdown */}
            <div className="hidden md:block relative group">
              <button className="text-gray-700 hover:text-orange-500 p-2 rounded-full hover:bg-orange-50 
                               transition-all duration-300">
                <User className="h-6 w-6" />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white border border-gray-200 
                            shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 transform origin-top-right translate-x-2">
                <div className="py-2">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 
                             transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 
                             transition-all duration-300"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="text-gray-700 hover:text-orange-500 p-2 relative group">
              <ShoppingCart className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 
                             flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                0
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-700 
                       hover:text-orange-500 hover:bg-orange-50 focus:outline-none transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Mobile search bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-3 rounded-full bg-gray-50 text-gray-900 placeholder-gray-500 
                         outline-none ring-2 ring-orange-500/50 focus:ring-orange-500 focus:bg-white
                         transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <button 
                  onClick={triggerImageUpload}
                  className="text-gray-500 hover:text-orange-500 transition-colors duration-300 p-1"
                  title="Search by image"
                >
                  <Camera className="h-5 w-5" />
                </button>
                <button className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-4">
              <div className="text-gray-700 text-sm font-medium mb-2 px-4">Language</div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-full text-sm
                             hover:bg-orange-50 transition-all duration-300 text-center"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Login/Register */}
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-orange-500 px-4 py-3 rounded-full text-base font-medium
                         hover:bg-orange-50 transition-all duration-300 text-center"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-orange-500 text-white px-6 py-3 rounded-full 
                         text-base font-medium hover:bg-orange-600 transition-all duration-300
                         shadow-lg hover:shadow-orange-500/25 text-center"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
