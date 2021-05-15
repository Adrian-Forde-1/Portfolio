import { useEffect } from "react";

// Gsap
import gsap from "gsap";

// SVG Components
import LinkedInLogoSVG from "../../../SVG/LinkedInLogoSVG";
import GithubLogoSVG from "../../../SVG/GithubLogoSVG";

// Components
import Navbar from "../../../Navigation/Navbar";
import { HeaderAnimations } from "../../../../Animations/HeaderAnimations";

const Header = () => {
  useEffect(() => {
    HeaderAnimations.initialAnimations();
  }, []);

  return (
    <div className="header__wrapper">
      <Navbar />
      <div className="header__content">
        <div className="header__name">
          <div className="header__name-first">
            <div className="header__name-first-part">A</div>
            <div className="header__name-second-part">
              <span>drian</span>
            </div>
          </div>
          <div className="header__name-last" id="last-name">
            <div className="header__name-first-part">F</div>
            <div className="header__name-second-part">
              <span>orde</span>
            </div>
          </div>
        </div>
        <div className="header__title">
          <span>Full Stack Developer</span>
        </div>
        <div className="header__links">
          <a
            href="https://www.linkedin.com/in/adrian-forde-969475197/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogoSVG />
          </a>
          <a
            href="https://github.com/Adrian-Forde-1"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogoSVG />
          </a>
        </div>
        <div className="header__cta-container">
          <button className="header__cta">
            <a href="#projects">Projects</a>
          </button>
        </div>
      </div>
      <div className="header__left"></div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
