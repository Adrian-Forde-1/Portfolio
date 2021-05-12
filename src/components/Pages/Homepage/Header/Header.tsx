import { useEffect } from "react";

// Gsap
import gsap from "gsap";

// Components
import Navbar from "../../../Navigation/Navbar";
import HeaderScrollDown from "./HeaderScrollDown";

const Header = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    let headerFirstNameDivs: NodeListOf<Element> = document.querySelectorAll(
      ".header__name-first-part"
    );
    let headerSecondNameDivs: NodeListOf<Element> = document.querySelectorAll(
      ".header__name-second-part"
    );
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

    if (htmlElement) {
      tl.set(htmlElement, { overflow: "initial" });
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
    if (htmlElement) {
      tl.set(htmlElement, { overflow: "initial" });
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
        <div className="header__cta-container">
          <button className="header__cta">
            <a href="#projects">Projects</a>
          </button>
        </div>
      </div>
      <div className="header__left"></div>
      <div className="header__right"></div>
      {/* <HeaderScrollDown /> */}
    </div>
  );
};

export default Header;