import { ContactSectionPropTypes } from "../../utils/propTypes";
import { ContactLinks, SpotifyEmbed } from "./index";
import { SectionHeader } from "../Shared/index";
import { FaGithub } from "react-icons/fa";
import { SiNotion, SiCoursera, SiPlatzi } from "react-icons/si";
import { BsSpotify, BsLinkedin } from "react-icons/bs";
import en from "../../data/en.json";
import es from "../../data/es.json";

const ContactSection = ({ language }) => {
  const translations = language === "en" ? en.contact : es.contact;

  const links = [
    {
      href: "https://github.com/gustavopumachagua",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/gustavopumachaguaperez/",
      label: "LinkedIn",
      icon: <BsLinkedin />,
    },
    {
      href: "https://www.coursera.org/user/4b8bbe1b9d7daa6b574ef3d6e409c5e4",
      label: "Coursera",
      icon: <SiCoursera />,
    },
    {
      href: "https://open.spotify.com/user/12158138688?si=4798854e43b643c5",
      label: "Spotify",
      icon: <BsSpotify />,
    },
    {
      href: "https://www.notion.so/gussdev/Apuntes-3abec46a55c04b92ba7ea40f0ab117ba",
      label: "Notion",
      icon: <SiNotion />,
    },
    {
      href: "https://platzi.com/p/gustavopumachagua/",
      label: "Platzi",
      icon: <SiPlatzi />,
    },
  ];

  return (
    <section className="py-4 bg-gray-100 dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-6 max-w-xl">
        <SectionHeader title={translations.title} />
        <ContactLinks links={links} />
        <div className="mt-10">
          <SectionHeader title={translations.spotify} />
          <SpotifyEmbed />
        </div>
      </div>
    </section>
  );
};
// Validación de props
ContactSection.propTypes = ContactSectionPropTypes;
export default ContactSection;
