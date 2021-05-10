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
  const skillCategoriesRef = useRef<HTMLDivElement[]>([]);
  skillCategoriesRef.current = [];

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
    if (skillCategoriesRef.current) {
      gsap.to(skillCategoriesRef.current, {
        opacity: 1,
      });
    }

    if (skillsHeadingRef && skillsRef) {
      gsap.to(skillsHeadingRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, []);

  // useEffect(() => {
  //   if (skillCategoriesRef.current && skillsRef.current) {

  //     gsap.to(skillCategoriesRef.current, {
  //       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //       duration: 1,
  //       delay: (): number => 1 * elementIndex,
  //       scrollTrigger: {
  //         trigger: skillsRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         toggleActions: "play reverse play reverse",
  //       },
  //     });

  //     skillCategoriesRef.current.forEach(
  //       (element: HTMLDivElement, elementIndex: number) => {
  //         let elementImg = element.querySelector(".skills__category-img");
  //         let elementCategoryName = element.querySelector(
  //           ".skills__category-name"
  //         );
  //         let elementBtn = element.querySelector(".skills__category-btn");

  //         console.log(1 * elementIndex);

  //         gsap.to(elementImg, {
  //           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //           duration: 1,
  //           delay: (): number => 1 * elementIndex,
  //           scrollTrigger: {
  //             trigger: skillsRef.current,
  //             start: "top top",
  //             end: "bottom top",
  //             toggleActions: "play reverse play reverse",
  //           },
  //         });
  //       }
  //     );
  //   }
  // }, [skillCategoriesRef]);

  useEffect(() => {
    let htmlElement: HTMLHtmlElement | null =
      document.getElementsByTagName("html")[0];
    if (viewingSkillCategory) {
      if (htmlElement) htmlElement.style.overflow = "hidden";
    } else {
      if (htmlElement) htmlElement.style.overflow = "initial";
    }
  }, [viewingSkillCategory]);

  const addSkillToRefs = (el: HTMLDivElement): void => {
    if (el && !skillCategoriesRef.current.includes(el)) {
      skillCategoriesRef.current.push(el);
    }
  };

  return (
    <div className="skills__grid" id="skills" ref={skillsRef}>
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
            addSkillToRefs={addSkillToRefs}
            skillCategoriesRef={skillCategoriesRef}
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
    </div>
  );
};

export default Skills;
