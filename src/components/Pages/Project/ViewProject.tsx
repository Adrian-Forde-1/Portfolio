import { useEffect, FC, useState, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  projects,
  Project,
  Feature,
} from "../Homepage/Projects/ProjectContext";

// Components
import Navbar from "../../Navigation/Navbar";
import Footer from "../Homepage/Footer/Footer";

const ViewProject: FC = (props: any) => {
  gsap.registerPlugin(ScrollTrigger);

  const mainImgRef = useRef<HTMLDivElement>(null);
  const projectNameRef = useRef<HTMLHeadingElement>(null);
  const viewProjectWrapper = useRef<HTMLDivElement>(null);
  const projectStackRef = useRef<HTMLDivElement>(null);
  const skillStackRefs = useRef<HTMLImageElement[] | null[]>([]);
  skillStackRefs.current = [];

  const [project, setProject] = useState<Project | null>(null);
  const [innerHeight, setInnerHeight] = useState<number | null>(null);

  useEffect(() => {
    if (props.match.params.project) {
      let proj: Project | null | undefined = projects.find(
        (project) => project.link === props.match.params.project
      );

      if (proj) setProject(proj);
    }

    const setInnerHeightForAnimation = () => {
      let iheight: any = window.innerHeight;
      let newInnerHeight: any = parseInt(iheight);
      setInnerHeight(newInnerHeight);
    };

    // window.addEventListener("resize", () => {
    //   setInnerHeightForAnimation();
    // });

    setInnerHeightForAnimation();
  }, []);

  useEffect(() => {
    if (project !== null) {
      if (viewProjectWrapper.current && mainImgRef.current) {
        console.log(window.innerHeight);
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: viewProjectWrapper.current,
            start: "-1% top",
            end: `${innerHeight}px top`,
            toggleActions: "play reverse play reverse",
          },
        });

        tl.to(mainImgRef.current, {
          delay: 0.4,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.out",
          duration: 1,
        }).to(
          projectNameRef.current,
          {
            delay: 0.4,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            ease: "power4.out",
            duration: 1,
          },
          "-=1.2"
        );

        tl.play(0);
      }

      gsap.to(skillStackRefs.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power4.out",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-view__main-img",
          endTrigger: ".project-view__stack",
          start: "bottom center",
          end: `bottom top`,
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to(".project-view__links a", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power4.out",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-view__links",
          start: "top 80%",
          end: `bottom top`,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to(".project-view__summary", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: ".project-view__summary",
          start: "top 80%",
          end: `bottom top`,
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, [project, innerHeight]);

  const addItemToStackRefs = (el: never): void => {
    if (el && !skillStackRefs.current.includes(el)) {
      skillStackRefs.current.push(el);
    }
  };

  return (
    <div className="project-view__wrapper" ref={viewProjectWrapper}>
      <Navbar />
      {project && (
        <>
          <div className="project-view__main-img" ref={mainImgRef}>
            <img src={project.img} alt="" draggable={false} />
          </div>
          <h2 className="project-view__name" ref={projectNameRef}>
            {project.name}
          </h2>
          <div className="project-view__stack" ref={projectStackRef}>
            {project.stack.map((item) => (
              <img
                src={item}
                alt=""
                draggable={false}
                ref={addItemToStackRefs}
              />
            ))}
          </div>
          <div className="project-view__links">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                draggable={false}
              >
                View Live
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                draggable={false}
              >
                View Github
              </a>
            )}
          </div>
          <div className="project-view__summary">
            <h5>Summary</h5>
            <p>{project.summary}</p>
          </div>
          <h2 className="project-view__sub-heading">Features</h2>
          <div className="project-view__features-container">
            {project.features.length > 0 &&
              project.features.map((feature: Feature, featureIndex: number) => (
                <div className="project-view__feature" key={featureIndex}>
                  <div className="project-view__feature-img">
                    <img src={feature.img} alt="" />
                  </div>
                  <div className="project-view__feature-text">
                    <h5>{feature.textTitle}</h5>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            {project.featureEndingStatement !== "" && (
              <div className="project-view__feature-ending-statement">
                <p>{project.featureEndingStatement}</p>
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default ViewProject;
