import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className={`relative w-16 h-8 flex items-center rounded-full transition-colors duration-300 ${
        darkMode ? "bg-purple-600" : "bg-gray-300"
      }`}
      onClick={() => setDarkMode(!darkMode)}>
      {/* Botón deslizante */}
      <span
        className={`absolute w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}></span>
      {/* Iconos de sol y luna */}
      <FaSun
        className={`absolute left-2 text-yellow-500 text-lg transition-opacity ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
      <FaMoon
        className={`absolute right-2 text-gray-800 dark:text-gray-500 text-lg transition-opacity ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
