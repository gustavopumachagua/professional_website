import { PortfolioFiltersPropTypes } from "../../utils/propTypes";
const PortfolioFilters = ({ filters, currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {Object.values(filters).map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`flex items-center px-6 py-2 rounded-full ${
            currentFilter === category
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          } transition`}>
          {category}
        </button>
      ))}
    </div>
  );
};

// Validación de props
PortfolioFilters.propTypes = PortfolioFiltersPropTypes;

export default PortfolioFilters;
