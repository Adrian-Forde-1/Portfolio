import { useRef, useEffect } from "react";

import { projects, Project } from "./ProjectContext";

// Animations
import { ProjectAnimations } from "../../../../Animations/ProjectAnimations";

// SVG Components
import StarSVG from "../../../SVG/StarSVG";

const Projects = () => {
  const projectRefs: any = useRef([]);
  projectRefs.current = [];
  const projectsHeadingRef = useRef<HTMLDivElement>(null);
  const projectsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ProjectAnimations.initialAnimations(projectsWrapperRef, projectsHeadingRef);
  }, []);

  const addProjectToRefs = (el: HTMLDivElement): void => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <section
      className="projects__wrapper"
      ref={projectsWrapperRef}
      id="projects"
    >
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
                <div
                  className={`project__content-name ${
                    project.longName && "project__content-name--long-name"
                  }`}
                >
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

      <div className="projects__heading" ref={projectsHeadingRef}>
        PROJECTS
      </div>
    </section>
  );
};

export default Projects;
