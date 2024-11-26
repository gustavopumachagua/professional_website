import { carouselPropTypes } from "../../utils/propTypes";

const Carousel = ({ profiles, currentIndex }) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-80 max-w-md h-80 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Imagen del Carrusel */}
        <img
          src={profiles[currentIndex]}
          alt={`Profile ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// Validación de PropTypes centralizada
Carousel.propTypes = Carousel.propTypes = carouselPropTypes;

export default Carousel;
