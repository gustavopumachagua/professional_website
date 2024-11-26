import { useState, useEffect } from "react";
import { heroPropTypes } from "../../utils/propTypes";
import { HeroText, Carousel } from "./index";

// Importa los íconos explícitamente
import perfil1 from "../../assets/icons/perfil_1.svg";
import perfil2 from "../../assets/icons/perfil_2.svg";
import perfil3 from "../../assets/icons/perfil_3.svg";

const Hero = ({ language }) => {
  // Manejo del índice de las imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con los íconos importados
  const profiles = [perfil1, perfil2, perfil3];

  // Cambio automático de imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 5000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, [profiles.length]);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-gray-100 dark:bg-gray-900"
      id="about">
      {/* Texto del Hero */}
      <HeroText language={language} />
      {/* Carrusel */}
      <Carousel profiles={profiles} currentIndex={currentIndex} />
    </section>
  );
};

Hero.propTypes = heroPropTypes;

export default Hero;
