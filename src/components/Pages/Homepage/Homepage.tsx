import { useRef } from "react";

// Components
import Skills from "../Skills/Skills";

const Homepage = () => {
  const homepageRef = useRef<HTMLDivElement>(null);
  return (
    <div className="wrapper wrapper--fd-col" id="homepage" ref={homepageRef}>
      <Skills homepageRef={homepageRef} />
    </div>
  );
};

export default Homepage;
