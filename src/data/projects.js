import en from "../data/en.json";
import es from "../data/es.json";
import defaultImage from "../assets/images/projects/No_Imagen_logo.jpg";
import billboard from "../assets/images/projects/billboard_logo.png";
import felicidad from "../assets/images/projects/felicidad_logo.webp";
import laptop_logo from "../assets/images/projects/laptop_logo.png";
import monitores_logo from "../assets/images/projects/monitores_logo.png";
import terremoto_logo from "../assets/images/projects/terremoto_logo.jpg";
import terremotoA_logo from "../assets/images/projects/terremotoA_logo.jpg";
import terremotoAA_logo from "../assets/images/projects/terremotoAA_logo.jpg";
import terremotoP_logo from "../assets/images/projects/terremotoP_logo.png";
import crunchyroll_logo from "../assets/images/projects/crunchyroll_logo.png";
import ciberseguridad_logo from "../assets/images/projects/ciberseguridad_logo.jpg";
import data_analisis_logo from "../assets/images/projects/data_analisis_logo.png";
import directorio_logo from "../assets/images/projects/directorio_logo.png";
import sitio_web_logo from "../assets/images/projects/sitio_web_logo.png";
import pagina_web_logo from "../assets/images/projects/pagina_web_logo.png";
import dog_api_logo from "../assets/images/projects/dog_api_logo.png";
import rick_morty_logo from "../assets/images/projects/rick_morty_logo.png";
import api_rick_logo from "../assets/images/projects/api_rick_logo.png";
import api_github_logo from "../assets/images/projects/api_github_logo.png";
import api_morty_logo from "../assets/images/projects/api_morty_logo.png";
import api_pokedex_logo from "../assets/images/projects/api_pokemon_logo.png";
import house_logo from "../assets/images/projects/Houses_logo.png";
import juego_logo from "../assets/images/projects/juegos_logo.png";
import memoria_logo from "../assets/images/projects/memoria_logo.png";

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
  {
    id: 9,
    image: crunchyroll_logo, // Imagen única para el proyecto 9
    docsLink: "https://github.com/gustavopumachagua/CloneCrunchyroll",
    demoLink: "https://clonecrunchyroll.vercel.app/",
  },
  {
    id: 10,
    image: ciberseguridad_logo, // Imagen única para el proyecto 10
    docsLink: "https://github.com/gustavopumachagua/Cyber_Security_Roadmap",
    demoLink:
      "https://github.com/gustavopumachagua/Cyber_Security_Roadmap/blob/main/1_Linux_Manejo_de_comandos_y_Shell_Script/1_1_Que_es_Linux.md",
  },
  {
    id: 11,
    image: data_analisis_logo, // Imagen única para el proyecto 11
    docsLink:
      "https://github.com/gustavopumachagua/AI_and_Data_Scientist_Roadmap",
    demoLink:
      "https://github.com/gustavopumachagua/AI_and_Data_Scientist_Roadmap/blob/main/1_Matematicas/1.1_Algebra_lineal_Calculo,_Analisis%20_matematico/01_Matematica_aplicada_al_aprendizaje_autom%C3%A1tico_algebra_lineal.ipynb",
  },
  {
    id: 12,
    image: directorio_logo, // Imagen única para el proyecto 12
    docsLink: "https://github.com/gustavopumachagua/Prueba_Directorio",
    demoLink: "https://prueba-directorio.vercel.app/",
  },
  {
    id: 13,
    image: sitio_web_logo, // Imagen única para el proyecto 13
    docsLink: "https://github.com/gustavopumachagua/sitio-web",
    demoLink: "https://gusscode.vercel.app/",
  },
  {
    id: 14,
    image: pagina_web_logo, // Imagen única para el proyecto 14
    docsLink: "https://github.com/gustavopumachagua/GussDev",
    demoLink: "https://gussdev.vercel.app/",
  },
  {
    id: 15,
    image: dog_api_logo, // Imagen única para el proyecto 15
    docsLink: "https://github.com/gustavopumachagua/API-DOG",
    demoLink: "https://api-dog-chi.vercel.app/",
  },
  {
    id: 16,
    image: rick_morty_logo, // Imagen única para el proyecto 16
    docsLink: "https://github.com/gustavopumachagua/API-RICK-AND-MORTY-2",
    demoLink: "https://api-rick-and-morty-2.vercel.app/",
  },
  {
    id: 17,
    image: api_rick_logo, // Imagen única para el proyecto 17
    docsLink: "https://github.com/gustavopumachagua/API-RICK-AND-MORTY-3",
    demoLink: "https://api-rick-and-morty-3.vercel.app/",
  },
  {
    id: 18,
    image: api_github_logo, // Imagen única para el proyecto 18
    docsLink: "https://github.com/gustavopumachagua/API-GITHUB",
    demoLink: "https://api-github-eta.vercel.app/",
  },
  {
    id: 19,
    image: api_morty_logo, // Imagen única para el proyecto 19
    docsLink: "https://github.com/gustavopumachagua/API-RICK-AND-MORTY-1",
    demoLink: "https://api-rick-and-morty-1.vercel.app/",
  },
  {
    id: 20,
    image: api_pokedex_logo, // Imagen única para el proyecto 20
    docsLink: "https://github.com/gustavopumachagua/api-pokemon#",
    demoLink: "https://api-pokemon-delta.vercel.app/",
  },
  {
    id: 21,
    image: house_logo, // Imagen única para el proyecto 21
    docsLink: "https://github.com/gustavopumachagua/sitio_web_1",
    demoLink: "https://sitio-web-1.vercel.app/",
  },
  {
    id: 22,
    image: juego_logo, // Imagen única para el proyecto 22
    docsLink: "https://github.com/gustavopumachagua/PlayJS#",
    demoLink: "https://play-js-two.vercel.app/",
  },
  {
    id: 23,
    image: memoria_logo, // Imagen única para el proyecto 23
    docsLink: "https://github.com/gustavopumachagua/memoria-play#",
    demoLink: "https://memoria-play.vercel.app/",
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
      image: detail.image || defaultImage, // Imagen predeterminada si no hay
      docsLink: detail.docsLink || "https://github.com/gustavopumachagua", // Enlace predeterminado
      demoLink: detail.demoLink || "https://github.com/gustavopumachagua", // Enlace predeterminado
    };
  });
};

export default getProjects;
