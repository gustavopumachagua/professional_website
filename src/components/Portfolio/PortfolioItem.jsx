import { PortfolioItemPropTypes } from "../../utils/propTypes";
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const PortfolioItem = ({
  title,
  date,
  category,
  description,
  image,
  docsLink,
  demoLink,
  labels,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 rounded-t-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <FaCalendarAlt className="mr-1" /> {date}
          </div>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-700 dark:text-blue-100">
            {category}
          </span>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
        <div className="flex justify-between md:flex-col lg:flex-row mt-4">
          <a
            href={docsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <FaFileAlt className="mr-1" /> {labels.documentation}
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <FaExternalLinkAlt className="mr-1" /> {labels.demo}
          </a>
        </div>
      </div>
    </div>
  );
};

// Validación de props
PortfolioItem.propTypes = PortfolioItemPropTypes;

export default PortfolioItem;
