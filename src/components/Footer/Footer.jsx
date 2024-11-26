import { FooterPropTypes } from "../../utils/propTypes";
import en from "../../data/en.json";
import es from "../../data/es.json";

const Footer = ({ language }) => {
  // Traducciones dinámicas basadas en el idioma seleccionado
  const translations = language === "en" ? en.footer : es.footer;

  return (
    <footer className="w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-400 fixed bottom-0 md:relative rounded-t-lg shadow-lg block md:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">{translations.text}</p>
      </div>
    </footer>
  );
};
// Validación de props
Footer.propTypes = FooterPropTypes;
export default Footer;
