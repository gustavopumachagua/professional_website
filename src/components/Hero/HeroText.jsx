import { herotextPropTypes } from "../../utils/propTypes";
import en from "../../data/en.json";
import es from "../../data/es.json";

const HeroText = ({ language }) => {
  const translations = language === "en" ? en.hero : es.hero;

  return (
    <div>
      <h2 className="text-4xl text-gray-800 dark:text-gray-100">
        {translations.title}
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {translations.description}
      </p>
    </div>
  );
};
HeroText.propTypes = herotextPropTypes;
export default HeroText;
