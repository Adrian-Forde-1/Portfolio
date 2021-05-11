import { RefObject } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export namespace ProjectAnimations {
  export const initialAnimations = (
    projectsWrapperRef: RefObject<HTMLDivElement>,
    projectsHeadingRef: RefObject<HTMLDivElement>
  ) => {
    gsap.registerPlugin(ScrollTrigger);
    if (projectsHeadingRef.current && projectsWrapperRef.current) {
      gsap.to(projectsHeadingRef.current, {
        xPercent: "-=80",
        scrollTrigger: {
          trigger: projectsWrapperRef.current,
          start: "-20% top",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          scrub: 1,
          pin: projectsHeadingRef.current,
        },
      });
    }

    let projects = document.querySelectorAll(".project");

    if (projects.length > 0) {
      projects.forEach((project) => {
        let projectLineSpans = project.querySelectorAll(
          ".project__content-description-line span"
        );
        let projectName = project.querySelector(".project__content-name h5");
        let projectButton = project.querySelector(
          ".project__content-view-project button"
        );
        let projectImg = project.querySelector(".project__img");
        let projectFavourite = project.querySelector(".project__favourite");

        if (projectFavourite) {
          gsap.to(projectFavourite, {
            duration: 1.8,
            opacity: 1,
            scrollTrigger: {
              trigger: project,
              start: "bottom bottom",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });
        }

        if (projectImg) {
          gsap.to(projectImg, {
            duration: 0.8,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            scrollTrigger: {
              trigger: project,
              start: "bottom bottom",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });
        }

        if (projectButton) {
          gsap.from(projectButton, {
            duration: 1.8,
            y: 200,
            ease: "power4.out",
            skewY: 20,
            stagger: {
              amount: 0.4,
            },
            scrollTrigger: {
              trigger: project,
              start: "bottom bottom",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });
        }

        if (projectName) {
          gsap.from(projectName, {
            duration: 1.8,
            y: 200,
            ease: "power4.out",
            skewY: 20,
            stagger: {
              amount: 0.4,
            },
            scrollTrigger: {
              trigger: project,
              start: "bottom bottom",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });
        }

        if (projectLineSpans.length > 0) {
          gsap.from(projectLineSpans, {
            duration: 1.8,
            y: 200,
            ease: "power4.out",
            skewY: 20,
            stagger: {
              amount: 0.4,
            },
            scrollTrigger: {
              trigger: project,
              start: "bottom bottom",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });
        }
      });
    }
  };
}
