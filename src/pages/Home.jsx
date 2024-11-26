import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import ContactSection from "../components/About/ContactSection";

const Home = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1">
        <Hero language={language} />
        <ContactSection language={language} />
        <Skills language={language} />
        <Portfolio language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Home;
