import { PortfolioPropTypes } from "../../utils/propTypes";
import { useState, useEffect, useMemo } from "react";
import { PortfolioFilters, PortfolioGrid, PortfolioPagination } from "./index";
import getProjects from "../../data/projects";
import en from "../../data/en.json";
import es from "../../data/es.json";

const Portfolio = ({ language }) => {
  // Memoizar las traducciones para evitar recalcular en cada render
  const translations = useMemo(
    () => (language === "en" ? en.portfolio : es.portfolio),
    [language]
  );
  const projects = useMemo(() => getProjects(language), [language]);

  const [filter, setFilter] = useState(translations.filters.all);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const filteredProjects = useMemo(() => {
    return filter === translations.filters.all
      ? projects
      : projects.filter((project) => project.category === filter);
  }, [filter, projects, translations.filters.all]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Actualizar filtro y página cuando cambie el idioma
  useEffect(() => {
    setFilter(translations.filters.all);
    setCurrentPage(1);
  }, [translations.filters.all]);

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {translations.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          {translations.description}
        </p>

        <PortfolioFilters
          filters={translations.filters}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <PortfolioGrid
          projects={paginatedProjects}
          labels={translations.labels}
        />

        <PortfolioPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

// Validación de props
Portfolio.propTypes = PortfolioPropTypes;

export default Portfolio;
