import { useRef, useEffect, useState } from "react";

import { projects, Project } from "./ProjectContext";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SVG Components
import StarSVG from "../../../SVG/StarSVG";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectRefs = useRef<HTMLDivElement[]>([]);
  const projectsHeading = useRef<HTMLDivElement>(null);
  projectRefs.current = [];
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const [xPercent, setXPercent] = useState<number | string>("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        setXPercent("initial");
      } else if (window.innerWidth <= 992) {
        setXPercent(-50);
      }
    });
    if (projectsHeading.current && projectsWrapperRef.current) {
      gsap.to(projectsHeading.current, {
        xPercent: "-=80",
        scrollTrigger: {
          trigger: projectsWrapperRef.current,
          start: "top top",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          scrub: 1,
          pin: projectsHeading.current,
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
              start: "center bottom",
              end: "bottom center",
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
              start: "center bottom",
              end: "bottom center",
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
            xPercent: xPercent,
            stagger: {
              amount: 0.4,
            },
            scrollTrigger: {
              trigger: project,
              start: "center bottom",
              end: "bottom center",
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
            xPercent: xPercent,
            stagger: {
              amount: 0.4,
            },
            scrollTrigger: {
              trigger: project,
              start: "center bottom",
              end: "bottom center",
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
            xPercent: xPercent,
            stagger: {
              amount: 0.4,
            },
            scrollTrigger: {
              trigger: project,
              start: "center bottom",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          });
        }
      });
    }
  }, []);

  const addProjectToRefs = (el: HTMLDivElement): void => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <div className="projects__wrapper" ref={projectsWrapperRef}>
      <div className="projects__projects">
        <div id="pin-start"></div>
        {projects.length > 0 &&
          projects.map((project: Project, projectIndex: number) => (
            <div className="project" ref={addProjectToRefs} key={projectIndex}>
              {project.favourite && (
                <div className="project__favourite">
                  <StarSVG />
                </div>
              )}
              <div className="project__img">
                <img src={project.img} alt="" />
              </div>
              <div className="project__content">
                <div className="project__content-name">
                  <h5>{project.name}</h5>
                </div>
                <div className="project__content-description">
                  {project.description.length > 0 &&
                    project.description.map(
                      (line: string, lineIndex: number) => (
                        <div className="project__content-description-line">
                          <span key={lineIndex}>{line}</span>
                        </div>
                      )
                    )}
                </div>
                <div className="project__content-view-project">
                  <button>{project.btnText}</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="projects__heading" ref={projectsHeading}>
        PROJECTS
      </div>
    </div>
  );
};

export default Projects;
