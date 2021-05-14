import { useEffect } from "react";

// Gsap
import gsap from "gsap";

// SVG Components
import LinkedInLogoSVG from "../../../SVG/LinkedInLogoSVG";
import GithubLogoSVG from "../../../SVG/GithubLogoSVG";

// Components
import Navbar from "../../../Navigation/Navbar";

const Header = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    let headerFirstNameDivs: NodeListOf<Element> = document.querySelectorAll(
      ".header__name-first-part"
    );
    // let headerSecondNameDivs: NodeListOf<Element> = document.querySelectorAll(
    //   ".header__name-second-part"
    // );
    let headerSecondNameText: NodeListOf<Element> = document.querySelectorAll(
      ".header__name-second-part span"
    );
    let headerTitleText: NodeListOf<Element> = document.querySelectorAll(
      ".header__title span"
    );
    let htmlElement = document.querySelector("html");
    let headerRight = document.querySelector(".header__right");
    let headerCTABtn: NodeListOf<Element> =
      document.querySelectorAll(".header__cta");

    let lastName = document.querySelector("#last-name");

    if (!sessionStorage.getItem("anim-played")) {
      if (htmlElement) {
        tl.set(htmlElement, { overflow: "hidden" });
      }
    }

    if (headerFirstNameDivs) {
      tl.to(headerFirstNameDivs, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.8,
        delay: 1,
      });
    }

    if (lastName) {
      tl.to(lastName, {
        marginLeft: 0,
        delay: 0.5,
        duration: 1.4,
        ease: "power4.inout",
      });
    }

    if (headerSecondNameText) {
      gsap.set(headerSecondNameText, {
        y: 200,
        skewY: 20,
        visibility: "visible",
      });
      tl.to(
        headerSecondNameText,
        {
          duration: 1.8,
          y: 0,
          ease: "power4.out",
          skewY: 0,
        },
        "-=1"
      );
    }
    if (headerTitleText) {
      gsap.set(headerTitleText, {
        y: 200,
        skewY: 20,
        visibility: "visible",
      });
      tl.to(
        headerTitleText,
        {
          duration: 1.8,
          y: 0,
          ease: "power4.out",
          skewY: 0,
        },
        "-=1.8"
      );
    }
    if (headerCTABtn) {
      gsap.set(headerCTABtn, {
        y: 200,
        skewY: 20,
        visibility: "visible",
      });
      tl.to(
        headerCTABtn,
        {
          duration: 1.8,
          y: 0,
          ease: "power4.out",
          skewY: 0,
        },
        "-=1.8"
      );
    }

    if (headerRight) {
      tl.to(
        headerRight,
        {
          duration: 1,
          scaleY: 1,
          ease: "power4.inout",
        },
        "-=1.4"
      );
    }
    tl.to(
      ".header__links",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.8,
        delay: 1,
      },
      "-=2.3"
    );

    if (htmlElement) {
      tl.set(htmlElement, { overflow: "initial" });
      sessionStorage.setItem("anim-played", "played");
    }
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
