import { RefObject } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export namespace HeaderAnimations {
  export const initialAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

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

    if (sessionStorage.getItem("anim-played")) {
      if (headerFirstNameDivs) {
        tl.set(headerFirstNameDivs, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        });
      }

      if (lastName) {
        tl.set(lastName, {
          marginLeft: 0,
        });
      }

      if (headerSecondNameText) {
        tl.set(headerSecondNameText, {
          y: 0,
          skewY: 0,
          visibility: "visible",
        });
      }
      if (headerTitleText) {
        tl.set(headerTitleText, {
          y: 0,
          skewY: 0,
          visibility: "visible",
        });
      }
      if (headerCTABtn) {
        tl.set(headerCTABtn, {
          y: 0,
          skewY: 0,
          visibility: "visible",
        });
      }

      if (headerRight) {
        tl.set(headerRight, {
          scaleY: 1,
        });
      }
      tl.set(".header__links", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
    } else {
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
    }

    if (htmlElement) {
      tl.set(htmlElement, { overflow: "initial" });
      sessionStorage.setItem("anim-played", "played");
    }
  };
}
