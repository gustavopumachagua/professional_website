import en from "../data/en.json";
import es from "../data/es.json";
import billboard from "../assets/images/projects/billboard_logo.png";
import felicidad from "../assets/images/projects/felicidad_logo.webp";
import laptop_logo from "../assets/images/projects/laptop_logo.png";
import monitores_logo from "../assets/images/projects/monitores_logo.png";
import terremoto_logo from "../assets/images/projects/terremoto_logo.jpg";
import terremotoA_logo from "../assets/images/projects/terremotoA_logo.jpg";
import terremotoAA_logo from "../assets/images/projects/terremotoAA_logo.jpg";
import terremotoP_logo from "../assets/images/projects/terremotoP_logo.png";

const projectDetails = [
  {
    id: 1,
    image: billboard, // Imagen única para el proyecto 1
    docsLink: "https://github.com/gustavopumachagua/Analisis_Billboard",
    demoLink:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_Billboard/blob/main/Analisis_Datos.ipynb",
  },
  {
    id: 2,
    image: felicidad, // Imagen única para el proyecto 2
    docsLink: "https://github.com/gustavopumachagua/Analisis_Encuestas",
    demoLink:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_Encuestas/blob/main/Estadistica_Graficas.ipynb",
  },
  {
    id: 3,
    image: laptop_logo, // Imagen única para el proyecto 3
    docsLink: "https://github.com/gustavopumachagua/Analisis_Laptops",
    demoLink:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_Laptops/blob/main/Estadisticas_Graficas.ipynb",
  },
  {
    id: 4,
    image: monitores_logo, // Imagen única para el proyecto 4
    docsLink:
      "https://github.com/gustavopumachagua/Analisis_de_Monitores_Amazon",
    demoLink:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_de_Monitores_Amazon/blob/main/Estadisticas_Graficas.ipynb",
  },
  {
    id: 5,
    image: terremoto_logo, // Imagen única para el proyecto 5
    docsLink: "https://github.com/gustavopumachagua/Analisis_de_Terremoto",
    demoLink:
      "https://nbviewer.org/github/gustavopumachagua/Analisis_de_Terremoto/blob/main/Estadisticas_graficos.ipynb",
  },
  {
    id: 6,
    image: terremotoA_logo, // Imagen única para el proyecto 6
    docsLink: "https://github.com/gustavopumachagua/Prediccion_Terremotos",
    demoLink:
      "https://nbviewer.org/github/gustavopumachagua/Prediccion_Terremotos/blob/main/Estadisticas_graficos.ipynb",
  },
  {
    id: 7,
    image: terremotoAA_logo, // Imagen única para el proyecto 7
    docsLink: "https://github.com/gustavopumachagua/app_Terremotos",
    demoLink: "https://app-terremotos.vercel.app/",
  },
  {
    id: 8,
    image: terremotoP_logo, // Imagen única para el proyecto 8
    docsLink: "https://github.com/gustavopumachagua/app_predicciones",
    demoLink: "https://app-predicciones.onrender.com/",
  },
  // Continúa con más proyectos si es necesario
];

const getProjects = (language) => {
  const translations = language === "en" ? en.portfolio : es.portfolio;

  return translations.projects.map((project, index) => {
    const detail = projectDetails[index] || {}; // Obtén los detalles o un objeto vacío

    return {
      ...project,
      id: detail.id || index + 1, // Asegura un ID único
      image: detail.image || "https://via.placeholder.com/400", // Imagen predeterminada si no hay
      docsLink: detail.docsLink || "https://github.com/default", // Enlace predeterminado
      demoLink: detail.demoLink || "https://demo.com/default", // Enlace predeterminado
    };
  });
};

export default getProjects;
