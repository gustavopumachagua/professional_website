import { logoPropTypes } from "../../utils/propTypes";
import LogoLight from "../../assets/icons/LogoLigth.svg";
import LogoDark from "../../assets/icons/LogoDark.svg";

const Logo = ({ scrollToTop }) => (
  <>
    <img
      src={LogoLight}
      alt="Logo"
      className="h-8 w-auto block dark:hidden cursor-pointer"
      onClick={scrollToTop}
    />
    <img
      src={LogoDark}
      alt="Logo"
      className="h-8 w-auto hidden dark:block cursor-pointer"
      onClick={scrollToTop}
    />
  </>
);

// Definición de PropTypes
Logo.propTypes = logoPropTypes;

export default Logo;
