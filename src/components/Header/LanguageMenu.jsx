import { languageMenuPropTypes } from "../../utils/propTypes";
import { FaGlobe } from "react-icons/fa";

const LanguageMenu = ({
  language,
  setLanguage,
  languageMenuOpen,
  toggleLanguageMenu,
}) => (
  <div className="relative">
    <button
      onClick={toggleLanguageMenu}
      className="text-gray-700 dark:text-gray-300 focus:outline-none">
      <FaGlobe className="text-2xl" />
    </button>
    {languageMenuOpen && (
      <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 shadow-md rounded-md">
        <button
          className={`block px-4 py-2 w-full text-left ${
            language === "es"
              ? "bg-gray-200 dark:bg-gray-600"
              : "hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
          onClick={() => {
            setLanguage("es");
            toggleLanguageMenu();
          }}>
          Español
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${
            language === "en"
              ? "bg-gray-200 dark:bg-gray-600"
              : "hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
          onClick={() => {
            setLanguage("en");
            toggleLanguageMenu();
          }}>
          English
        </button>
      </div>
    )}
  </div>
);

// Definición de PropTypes
LanguageMenu.propTypes = languageMenuPropTypes;
export default LanguageMenu;
