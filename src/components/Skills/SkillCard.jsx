import { SkillCardPropTypes } from "../../utils/propTypes";

const SkillCard = ({ name, imageUrl }) => {
  return (
    <div className="relative group rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Fondo de imagen */}
      <div
        className="h-40 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}></div>

      {/* Nombre del skill */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center py-2">
        <p className="text-white text-sm font-semibold group-hover:text-gray-200">
          {name}
        </p>
      </div>
    </div>
  );
};
// Validación de props
SkillCard.propTypes = SkillCardPropTypes;
export default SkillCard;
