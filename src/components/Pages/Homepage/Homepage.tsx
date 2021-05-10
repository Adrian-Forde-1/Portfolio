import { useRef } from "react";

// Components
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import About from "./About/About";

const Homepage = () => {
  const homepageRef = useRef<HTMLDivElement>(null);
  return (
    <div className="wrapper wrapper--fd-col" id="homepage" ref={homepageRef}>
      <About />
      <Skills homepageRef={homepageRef} />
      <Projects />
    </div>
  );
};

export default Homepage;
