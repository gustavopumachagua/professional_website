import { SkillGridPropTypes } from "../../utils/propTypes";
import { SkillCard } from "./index";

const SkillGrid = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} imageUrl={skill.imageUrl} />
      ))}
    </div>
  );
};

// Validación de props
SkillGrid.propTypes = SkillGridPropTypes;

export default SkillGrid;
