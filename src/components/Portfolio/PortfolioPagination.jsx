import { PortfolioPaginationPropTypes } from "../../utils/propTypes";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PortfolioPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-10 space-x-2 pb-12 md:pb-0">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition">
        <FaChevronLeft />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            currentPage === index + 1
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
          } transition`}>
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition">
        <FaChevronRight />
      </button>
    </div>
  );
};

// Validación de props
PortfolioPagination.propTypes = PortfolioPaginationPropTypes;

export default PortfolioPagination;
