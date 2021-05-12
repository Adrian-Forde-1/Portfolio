import { FC, useRef, RefObject, useState, useEffect } from "react";
import { skillsContext } from "./SkillsContext";

// Gsap
import gsap from "gsap";

// Display Types
import { DISPLAY_TYPES } from "../../../../Configuration/DisplayConfiguration";

// Components
import SkillCategory from "./SkillCategory";

interface SkillsProps {
  homepageRef: RefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = () => {
  const skillsRef = useRef<any>(null);
  const skillsHeadingRef = useRef<HTMLDivElement>(null);
  // const skillCategoriesRef: any = useRef([]);
  // skillCategoriesRef.current = [];

  const [viewingSkillCategory, setViewingSkillCategory] =
    useState<boolean>(false);
  const [currentDisplayType, setCurrentDisplayType] = useState<DISPLAY_TYPES>(
    () => {
      return window.innerWidth > 992
        ? DISPLAY_TYPES.DESKTOP
        : DISPLAY_TYPES.MOBILE;
    }
  );
  const [categoryCurrentlyBeingViewed, setCategoryCurrentlyBeingViewed] =
    useState<string>("");

  useEffect(() => {
    if (".skills__category") {
      gsap.to(".skills__category", {
        opacity: 1,
      });
    }

    let tl = gsap.timeline({});

    if (skillsHeadingRef && skillsRef) {
      gsap.to(skillsHeadingRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    let skillCategories = document.querySelectorAll(".skills__category");
    if (skillCategories && skillsRef.current) {
      skillCategories.forEach((skillCat: any) => {
        gsap.to(skillCat, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    let htmlElement: HTMLHtmlElement | null =
      document.getElementsByTagName("html")[0];
    if (viewingSkillCategory) {
      if (htmlElement) htmlElement.style.overflow = "hidden";
      let skillsElement = document.querySelector("#skills");
      skillsElement?.scrollIntoView();
    } else {
      if (htmlElement) htmlElement.style.overflow = "initial";
    }
  }, [viewingSkillCategory]);

  // const addSkillToRefs = (el: HTMLDivElement): void => {
  //   if (el && !skillCategoriesRef.current.includes(el)) {
  //     skillCategoriesRef.current.push(el);
  //   }
  // };

  return (
    <section className="skills__grid" id="skills" ref={skillsRef}>
      <div className="skills__heading" ref={skillsHeadingRef}>
        <span>SKILLS</span>
      </div>
      {skillsContext.length > 0 &&
        skillsContext.map((skill, skillIndex) => (
          <SkillCategory
            name={skill.name}
            btnText={skill.btnText}
            img={skill.img}
            skillImages={skill.skillImages}
            categoryIndex={skillIndex}
            key={skillIndex}
            viewingSkillCategory={viewingSkillCategory}
            setViewingSkillCategory={setViewingSkillCategory}
            currentDisplayType={currentDisplayType}
            setCurrentDisplayType={setCurrentDisplayType}
            categoryCurrentlyBeingViewed={categoryCurrentlyBeingViewed}
            setCategoryCurrentlyBeingViewed={setCategoryCurrentlyBeingViewed}
            skillsHeadingRef={skillsHeadingRef}
            top={300}
          />
        ))}
    </section>
  );
};

export default Skills;
