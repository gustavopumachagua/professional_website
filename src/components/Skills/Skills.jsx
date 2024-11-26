import { SkillGrid } from "./index";
import { skillsData } from "../../data/skills";
import en from "../../data/en.json";
import es from "../../data/es.json";
import { SkillsPropTypes } from "../../utils/propTypes";

const Skills = ({ language }) => {
  const translations = language === "en" ? en.skills : es.skills;

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {translations.title}
        </h2>

        {/* Descripción */}
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          {translations.description}
        </p>

        {/* Grid de Skills */}
        <SkillGrid skills={skillsData} />
      </div>
    </section>
  );
};
// Validación de props
Skills.propTypes = SkillsPropTypes;
export default Skills;
