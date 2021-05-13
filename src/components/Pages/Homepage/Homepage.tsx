import { useRef, useEffect } from "react";

// Components
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Homepage = () => {
  const homepageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let htmlElement = document.querySelector("html");
    if (htmlElement) htmlElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <main className="wrapper wrapper--fd-col" id="homepage" ref={homepageRef}>
      <Header />
      <About />
      <Skills homepageRef={homepageRef} />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Homepage;
