import { headerPropTypes } from "../../utils/propTypes";
import { useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineCheckSquare,
  AiOutlineTool,
} from "react-icons/ai";

import {
  NavItem,
  DesktopNavItem,
  DarkModeToggle,
  Logo,
  LanguageMenu,
} from "./index";
import en from "../../data/en.json";
import es from "../../data/es.json";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = ({ language, setLanguage }) => {
  const [activeSection, setActiveSection] = useState("");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const translations = language === "en" ? en.header : es.header;

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);

  return (
    <header className="sticky top-0 z-30 bg-gray-100 dark:bg-gray-900 shadow-sm">
      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-3 shadow-sm md:hidden">
        <Logo scrollToTop={scrollToTop} />
        <div className="flex items-center space-x-6">
          <LanguageMenu
            language={language}
            setLanguage={setLanguage}
            languageMenuOpen={languageMenuOpen}
            toggleLanguageMenu={toggleLanguageMenu}
          />
          <DarkModeToggle />
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-gray-100 dark:bg-gray-900 shadow-lg md:hidden">
        <nav className="flex justify-between px-6 py-3">
          <NavItem
            id="about"
            label={translations.about}
            icon={AiOutlineUser}
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
          />
          <NavItem
            id="skills"
            label={translations.skills}
            icon={AiOutlineTool}
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
          />
          <NavItem
            id="projects"
            label={translations.projects}
            icon={AiOutlineCheckSquare}
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
          />
        </nav>
      </div>
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center py-4 px-8 bg-gray-100 dark:bg-gray-900">
        <Logo scrollToTop={scrollToTop} />
        <nav className="flex space-x-10">
          <DesktopNavItem
            id="about"
            label={translations.about}
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
          />
          <DesktopNavItem
            id="skills"
            label={translations.skills}
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
          />
          <DesktopNavItem
            id="projects"
            label={translations.projects}
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
          />
        </nav>
        <div className="flex items-center space-x-6">
          <LanguageMenu
            language={language}
            setLanguage={setLanguage}
            languageMenuOpen={languageMenuOpen}
            toggleLanguageMenu={toggleLanguageMenu}
          />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

// Validación de props
Header.propTypes = headerPropTypes;
export default Header;
