import { desktopNavItemPropTypes } from "../../utils/propTypes.js";

const DesktopNavItem = ({
  id,
  label,
  activeSection,
  handleScrollToSection,
}) => {
  const isActive = activeSection === id;

  return (
    <button
      onClick={() => handleScrollToSection(id)}
      className={`text-lg font-medium tracking-wide relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
        isActive
          ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
          : "text-gray-700 dark:text-gray-300"
      }`}>
      {label}
    </button>
  );
};

// Definición de las props y sus tipos
DesktopNavItem.propTypes = desktopNavItemPropTypes;

export default DesktopNavItem;
