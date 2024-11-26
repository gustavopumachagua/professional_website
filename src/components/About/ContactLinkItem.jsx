import { ContactLinkItemPropTypes } from "../../utils/propTypes";
const ContactLinkItem = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
    <div className="flex items-center gap-3">
      <div className="text-2xl text-gray-800 dark:text-gray-100">{icon}</div>
      <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
        {label}
      </span>
    </div>
    <span className="text-gray-500 dark:text-gray-400">&rarr;</span>
  </a>
);

// Validación de props
ContactLinkItem.propTypes = ContactLinkItemPropTypes;

export default ContactLinkItem;
