import { ContactLinksPropTypes } from "../../utils/propTypes";
import { ContactLinkItem } from "./index";

const ContactLinks = ({ links }) => (
  <div className="flex flex-col gap-y-4 py-4">
    {links.map((link, index) => (
      <ContactLinkItem
        key={index}
        href={link.href}
        label={link.label}
        icon={link.icon}
      />
    ))}
  </div>
);

// Validación de props
ContactLinks.propTypes = ContactLinksPropTypes;

export default ContactLinks;
