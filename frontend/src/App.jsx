import React, { useRef } from "react";
import {
  Navigation,
  Hero,
  About,
  Expertise,
  Projects,
  Skills,
  Contact,
  Footer,
} from "./components";
import "./index.css";

function App() {
  const sections = useRef({
    about: null,
    projects: null,
    skills: null,
    contact: null,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExplore = () => {
    scrollToSection("projects");
  };

  return (
    <div className="bg-dark-950 text-white overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      <Hero onExplore={handleExplore} />
      <About />
      <Expertise />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
