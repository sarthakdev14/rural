import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { currentLang, languages, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: languages[currentLang].services, path: "/services" },
    { name: languages[currentLang].telemedicine, path: "/telemedicine" },
    { name: languages[currentLang].resources, path: "/resources" },
    { name: languages[currentLang].emergency, path: "/emergency" },
  ];

  if (isLoading) {
    return (
      <nav className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-32 rounded"></div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-24 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors transform hover:scale-105 active:scale-95"
            >
              {currentLang.toUpperCase()}
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500 text-xl animate-spin-slow" />
              ) : (
                <FaMoon className="text-gray-700 text-xl animate-spin-slow" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500 text-xl animate-spin-slow" />
              ) : (
                <FaMoon className="text-gray-700 text-xl animate-spin-slow" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 animate-slideDown">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors transform hover:scale-105 active:scale-95"
              >
                {currentLang.toUpperCase()}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
