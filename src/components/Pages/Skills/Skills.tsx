import { FC, useRef, RefObject } from "react";

// SVG
import FrontendSVG from "../../../resources/SVG/FrontendSVG.svg";
import BackendSVG from "../../../resources/SVG/BackendSVG.svg";
import DatabaseSVG from "../../../resources/SVG/DatabaseSVG.svg";

// Components
import SkillCategory from "./SkillCategory";

interface SkillsProps {
  homepageRef: RefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = (props) => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillCategoriesRef = useRef<HTMLDivElement[]>([]);
  skillCategoriesRef.current = [];

  const addSkillToRefs = (el: HTMLDivElement): void => {
    if (el && !skillCategoriesRef.current.includes(el)) {
      skillCategoriesRef.current.push(el);
    }
  };

  return (
    <div className="skills__grid" id="skills" ref={skillsRef}>
      <SkillCategory
        name="Frontend"
        btnText="Inspect"
        img={FrontendSVG}
        addSkillToRefs={addSkillToRefs}
        skillCategoriesRef={skillCategoriesRef}
        homepageRef={props.homepageRef}
        skillsRef={skillsRef}
        top={0}
      />
      <SkillCategory
        name="Backend"
        btnText="Deploy"
        img={BackendSVG}
        addSkillToRefs={addSkillToRefs}
        skillCategoriesRef={skillCategoriesRef}
        homepageRef={props.homepageRef}
        skillsRef={skillsRef}
        top={300}
      />
      <SkillCategory
        name="Database"
        btnText="Select"
        img={DatabaseSVG}
        addSkillToRefs={addSkillToRefs}
        skillCategoriesRef={skillCategoriesRef}
        homepageRef={props.homepageRef}
        skillsRef={skillsRef}
        top={600}
      />
    </div>
  );
};

export default Skills;
