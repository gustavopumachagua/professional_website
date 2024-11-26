import { PortfolioGridPropTypes } from "../../utils/propTypes";
import { PortfolioItem } from "./index";

const PortfolioGrid = ({ projects, labels }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
      {projects.map((project) => (
        <PortfolioItem key={project.id} {...project} labels={labels} />
      ))}
    </div>
  );
};

// Validación de props
PortfolioGrid.propTypes = PortfolioGridPropTypes;

export default PortfolioGrid;
