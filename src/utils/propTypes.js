import PropTypes from "prop-types";

// Tipos comunes reutilizables
const languagePropTypes = {
  language: PropTypes.string.isRequired,
};

const labelPropTypes = {
  label: PropTypes.string.isRequired,
};

const iconPropTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element])
    .isRequired,
};

const scrollablePropTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

const paginationPropTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

const projectShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  docsLink: PropTypes.string,
  demoLink: PropTypes.string,
};

// PropTypes agrupados
export const headerPropTypes = {
  ...languagePropTypes,
  setLanguage: PropTypes.func.isRequired,
};

export const heroPropTypes = languagePropTypes;

export const herotextPropTypes = languagePropTypes;

export const SkillsPropTypes = languagePropTypes;

export const FooterPropTypes = languagePropTypes;

export const PortfolioPropTypes = languagePropTypes;

export const languageMenuPropTypes = {
  ...languagePropTypes,
  setLanguage: PropTypes.func.isRequired,
  languageMenuOpen: PropTypes.bool.isRequired,
  toggleLanguageMenu: PropTypes.func.isRequired,
};

export const logoPropTypes = scrollablePropTypes;

export const desktopNavItemPropTypes = {
  ...labelPropTypes,
  activeSection: PropTypes.string,
  handleScrollToSection: PropTypes.func.isRequired,
};

export const carouselPropTypes = {
  profiles: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export const NavItemPropTypes = {
  id: PropTypes.string.isRequired,
  ...labelPropTypes,
  ...iconPropTypes,
  activeSection: PropTypes.string,
  handleScrollToSection: PropTypes.func.isRequired,
};

export const ContactLinkItemPropTypes = {
  href: PropTypes.string.isRequired,
  ...labelPropTypes,
  ...iconPropTypes,
};

export const ContactLinksPropTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      ...labelPropTypes,
      ...iconPropTypes,
    })
  ).isRequired,
};

export const ContactSectionPropTypes = languagePropTypes;

export const SectionHeaderPropTypes = {
  title: PropTypes.string.isRequired,
};

export const PortfolioFiltersPropTypes = {
  filters: PropTypes.object.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export const SkillGridPropTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const SkillCardPropTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export const PortfolioGridPropTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(projectShape)).isRequired,
  labels: PropTypes.object.isRequired,
};

export const PortfolioItemPropTypes = {
  ...projectShape,
  labels: PropTypes.object.isRequired,
};

export const PortfolioPaginationPropTypes = paginationPropTypes;
