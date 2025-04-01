import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { currentLang, languages, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: languages[currentLang].services, path: "/services" },
    { name: languages[currentLang].telemedicine, path: "/telemedicine" },
    { name: languages[currentLang].resources, path: "/resources" },
    { name: languages[currentLang].emergency, path: "/emergency" },
  ];

  if (isLoading) {
    return (
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md">
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
    <>
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
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
                  className={`text-gray-900 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-2 py-1 transition-colors font-medium relative group ${
                    location.pathname === item.path
                      ? "text-gray-500 dark:text-white-300"
                      : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 dark:bg-blue-300 transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
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
          <div
            className={`md:hidden fixed inset-x-4 top-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
                    location.pathname === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
