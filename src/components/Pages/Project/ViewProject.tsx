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
  const projectStatusRef = useRef<HTMLSpanElement>(null);
  const viewProjectWrapper = useRef<HTMLDivElement>(null);
  const projectStackRef = useRef<HTMLDivElement>(null);
  const skillStackRefs = useRef<HTMLImageElement[] | null[]>([]);
  skillStackRefs.current = [];

  const [project, setProject] = useState<Project | null>(null);
  const [innerHeight, setInnerHeight] = useState<number | null>(null);

  useEffect(() => {
    let htmlElement = document.querySelector("html");
    if (htmlElement) htmlElement.style.scrollBehavior = "initial";
    window.scrollTo(0, 0);
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
            toggleActions: "play pause resume resume",
          },
        });

        tl.to(mainImgRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.out",
          duration: 1.8,
        }).to(
          projectNameRef.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            ease: "power4.out",
            duration: 1.8,
          },
          "-=1.1"
        );

        if (projectStatusRef.current) {
          tl.to(
            projectStatusRef.current,
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              ease: "power4.out",
              duration: 1.8,
            },
            "-=1.7"
          );
        }

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
          toggleActions: "play pause resume resume",
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
          toggleActions: "play pause resume resume",
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
          toggleActions: "play pause resume resume",
        },
      });

      let projectFeatures = document.querySelectorAll(".project-view__feature");

      if (projectFeatures.length > 0) {
        projectFeatures.forEach((feature) => {
          let featureImage = feature.querySelector(
            ".project-view__feature-img"
          );
          let featureHeading = feature.querySelector(
            ".project-view__feature-text h5"
          );
          let featureText = feature.querySelector(
            ".project-view__feature-text p"
          );

          let tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: feature,
              endTrigger: feature,
              start: "top center",
              end: `bottom top`,
              toggleActions: "play pause resume resume",
            },
          });

          tl1
            .to(featureImage, {
              y: 0,
              opacity: 1,
              ease: "power4.inout",
              duration: 1.8,
            })
            .to(
              featureHeading,
              {
                y: 0,
                opacity: 1,
                ease: "power4.inout",
                duration: 1.8,
              },
              "-=1.6"
            )
            .to(
              featureText,
              {
                y: 0,
                opacity: 1,
                ease: "power4.inout",
                duration: 1.8,
              },
              "-=1.7"
            );
        });
      }
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
          {project.projectStatus && (
            <span className="project-view__status" ref={projectStatusRef}>
              {project.projectStatus}
            </span>
          )}
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
