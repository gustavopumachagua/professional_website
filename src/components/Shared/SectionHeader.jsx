import { SectionHeaderPropTypes } from "../../utils/propTypes";
const SectionHeader = ({ title }) => (
  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
    {title}
  </h2>
);

// Validación de props
SectionHeader.propTypes = SectionHeaderPropTypes;
export default SectionHeader;
