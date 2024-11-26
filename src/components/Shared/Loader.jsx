import { FaSpinner } from "react-icons/fa";

const Loader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
    <FaSpinner className="animate-spin text-gray-600 text-4xl" />
  </div>
);

export default Loader;
