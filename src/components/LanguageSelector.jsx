import { useLanguage } from "../context/LanguageContext";
import { FaGlobe } from "react-icons/fa";

function LanguageSelector() {
  const { currentLang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      title="Change Language"
    >
      <FaGlobe className="text-gray-600" />
      <span className="text-sm font-medium text-gray-700 uppercase">
        {currentLang}
      </span>
    </button>
  );
}

export default LanguageSelector;
