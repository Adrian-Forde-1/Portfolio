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
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsHeadingRef = useRef<HTMLDivElement>(null);
  const skillCategoriesRef = useRef<HTMLDivElement[]>([]);
  skillCategoriesRef.current = [];

  const [viewingSkillCategory, setViewingSkillCategory] = useState<boolean>(
    false
  );
  const [currentDisplayType, setCurrentDisplayType] = useState<DISPLAY_TYPES>(
    () => {
      return window.innerWidth > 992
        ? DISPLAY_TYPES.DESKTOP
        : DISPLAY_TYPES.MOBILE;
    }
  );
  const [
    categoryCurrentlyBeingViewed,
    setCategoryCurrentlyBeingViewed,
  ] = useState<string>("");

  useEffect(() => {
    if (skillCategoriesRef.current) {
      gsap.to(skillCategoriesRef.current, {
        opacity: 1,
      });
    }
  }, []);

  useEffect(() => {
    let htmlElement: HTMLHtmlElement | null = document.getElementsByTagName(
      "html"
    )[0];
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
            top={300}
          />
        ))}
    </div>
  );
};

export default Skills;
