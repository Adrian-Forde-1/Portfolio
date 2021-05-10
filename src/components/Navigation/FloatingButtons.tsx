import { useRef, useEffect } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FloatingButtons = () => {
  gsap.registerPlugin(ScrollTrigger);

  const navButtonsRef = useRef<HTMLDivElement[]>([]);
  navButtonsRef.current = [];
  return (
    <div className="floating-buttons__wrapper">
      <div className="floating-buttons__button">
        <a href="#"></a>
        <span>Home</span>
      </div>
      <div className="floating-buttons__button">
        <a href="#about"></a>
        <span>About</span>
      </div>
      <div className="floating-buttons__button">
        <a href="#skills"></a>
        <span>Skills</span>
      </div>
      <div className="floating-buttons__button">
        <a href="#projects"></a>
        <span>Projects</span>
      </div>
      <div className="floating-buttons__button">
        <a href="#contact"></a>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
