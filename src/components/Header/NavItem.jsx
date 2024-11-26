import { NavItemPropTypes } from "../../utils/propTypes";
const NavItem = ({
  id,
  label,
  icon: Icon,
  activeSection,
  handleScrollToSection,
}) => {
  const isActive = activeSection === id;

  return (
    <button
      onClick={() => handleScrollToSection(id)}
      className={`flex flex-col items-center transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
        isActive
          ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
          : "text-gray-600 dark:text-gray-300"
      }`}
      aria-label={label}>
      <Icon className="text-2xl" />
      <span className="text-xs font-medium tracking-wide">{label}</span>
    </button>
  );
};
// Validación de props
NavItem.propTypes = NavItemPropTypes;

export default NavItem;
