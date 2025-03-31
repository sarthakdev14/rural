import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  const { currentLang, languages } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="text-gray-400 dark:text-gray-500">
              {languages[currentLang].servicesDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {languages[currentLang].services}
                </Link>
              </li>
              <li>
                <Link
                  to="/telemedicine"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {languages[currentLang].telemedicine}
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {languages[currentLang].resources}
                </Link>
              </li>
              <li>
                <Link
                  to="/emergency"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {languages[currentLang].emergency}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              {languages[currentLang].contactUs}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 dark:text-blue-300" />
                <span className="text-gray-400 dark:text-gray-500">
                  +91 1234567890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 dark:text-blue-300" />
                <span className="text-gray-400 dark:text-gray-500">
                  contact@ruralcare.com
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400 dark:text-blue-300" />
                <span className="text-gray-400 dark:text-gray-500">
                  {languages[currentLang].address}
                </span>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              {languages[currentLang].emergency}
            </h3>
            <div className="bg-red-600 dark:bg-red-700 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-bold mb-2">108</p>
              <p className="text-sm text-red-100">
                {languages[currentLang].emergencySubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; 2024 RuralCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
