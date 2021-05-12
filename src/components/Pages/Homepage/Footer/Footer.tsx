import React from "react";

// Components
import LinkedInLogoSVG from "../../../SVG/LinkedInLogoSVG";
import GithubLogoSVG from "../../../SVG/GithubLogoSVG";

const Footer = () => {
  return (
    <footer>
      <h4>Adrian Forde</h4>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/adrian-forde-969475197/"
          target="_blank"
        >
          <LinkedInLogoSVG />
        </a>
        <a href="https://github.com/Adrian-Forde-1" target="_blank">
          <GithubLogoSVG />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
