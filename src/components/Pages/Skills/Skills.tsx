import { FC, useRef, RefObject } from "react";
import { skillsContext } from "./SkillsContext";

// Components
import SkillCategory from "./SkillCategory";

interface SkillsProps {
  homepageRef: RefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = () => {
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
            top={300}
          />
        ))}
    </div>
  );
};

export default Skills;
