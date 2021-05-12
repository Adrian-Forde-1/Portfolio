import {
  useRef,
  FC,
  RefObject,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

// Display Types
import { DISPLAY_TYPES } from "../../../../Configuration/DisplayConfiguration";

// GSAP
import gsap from "gsap";
import SkillAnimations from "../../../../Animations/SkillAnimations";

// SVG
import TimesSVG from "../../../SVG/TimesSVG";

interface skillProps {
  name: string;
  img: string;
  skillImages: { img: string; status: string }[];
  top?: number;
  btnText: string;
  categoryIndex: number;
  viewingSkillCategory: boolean;
  setViewingSkillCategory: Dispatch<SetStateAction<boolean>>;
  currentDisplayType: DISPLAY_TYPES;
  setCurrentDisplayType: Dispatch<SetStateAction<DISPLAY_TYPES>>;
  categoryCurrentlyBeingViewed: string;
  setCategoryCurrentlyBeingViewed: Dispatch<SetStateAction<string>>;
  skillsHeadingRef: RefObject<HTMLDivElement>;
}

const SkillCategory: FC<skillProps> = ({
  name,
  img,
  top = 0,
  btnText,
  skillImages,
  categoryIndex,
  viewingSkillCategory,
  setViewingSkillCategory,
  currentDisplayType,
  setCurrentDisplayType,
  categoryCurrentlyBeingViewed,
  setCategoryCurrentlyBeingViewed,
  skillsHeadingRef,
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLDivElement>(null);
  // let skillsContainer = useRef<HTMLDivElement[]>([]);
  // skillsContainer.current = [];
  let skillCategoryRef = useRef<HTMLDivElement>(null);

  const [CSSTop, setCSSTop] = useState<string>("");
  const [CSSLeft, setCSSLeft] = useState<string>("");
  const [CSSRight, setCSSRight] = useState<string>("");
  const [CSSTransformXPerc, setCSSTransformXPerc] = useState<string>("");
  const [initialPositionValuesSet, setInitialPositionValuesSet] =
    useState<boolean>(false);

  // GSAP Timeline
  let skillCatTimeline = gsap.timeline();

  useEffect(() => {
    let skillCategories = document.querySelectorAll(".skills__category");
    if (skillCategories) {
      skillCategories.forEach((element: any) => {
        if (element?.getAttribute("id") === name)
          skillCategoryRef.current = element;
      });
    }

    const setPositioningValues = () => {
      if (window.innerWidth > 992) {
        setCSSTop(
          (
            Math.ceil((categoryIndex - 1) / 2) * top +
            Math.ceil((categoryIndex + 1) / 2) * 160
          ).toString()
        );

        setCSSLeft((categoryIndex + 1) % 2 !== 0 ? "25%" : "initial");
        setCSSRight((categoryIndex + 1) % 2 === 0 ? "25%" : "initial");
        setCSSTransformXPerc((prevState) => (prevState = "0"));
        setCurrentDisplayType(DISPLAY_TYPES.DESKTOP);
      } else if (window.innerWidth <= 992) {
        // let topExtra = categoryIndex !== 0 ? categoryIndex * 80 : 50;
        setCSSTop((categoryIndex * top + 120 * categoryIndex + 120).toString());
        setCSSLeft("50%");
        setCSSRight("initial");
        setCSSTransformXPerc("-50");
        setCurrentDisplayType(DISPLAY_TYPES.MOBILE);
      }
    };

    window.addEventListener("resize", () => {
      setPositioningValues();
    });

    setPositioningValues();
  }, []);

  useEffect(() => {
    if (
      !initialPositionValuesSet &&
      CSSTop !== "" &&
      CSSLeft !== "" &&
      CSSRight !== "" &&
      CSSTransformXPerc !== ""
    ) {
      setAndPositionElement();
      setInitialPositionValuesSet(true);
    }
  }, [CSSTop, CSSLeft, CSSRight, CSSTransformXPerc]);

  useEffect(() => {
    if (viewingSkillCategory) {
      if (
        currentDisplayType === DISPLAY_TYPES.DESKTOP &&
        skillCategoryRef.current
      )
        return SkillAnimations.animateFromMobileToNormal(
          name,
          categoryCurrentlyBeingViewed,
          nameRef,
          imgRef,
          skillsContainerRef,
          closeBtnRef
        );
      if (
        currentDisplayType === DISPLAY_TYPES.MOBILE &&
        skillCategoryRef.current
      )
        return SkillAnimations.animateFromNormalToMobile(
          name,
          categoryCurrentlyBeingViewed,
          nameRef,
          imgRef,
          skillsContainerRef,
          closeBtnRef
        );
    }
  }, [currentDisplayType]);

  useEffect(() => {
    setAndPositionElement();
  }, [CSSTop, CSSLeft, CSSRight, CSSTransformXPerc, viewingSkillCategory]);

  const setAndPositionElement = () => {
    if (skillCategoryRef.current && name !== categoryCurrentlyBeingViewed) {
      gsap.to(skillCategoryRef.current, {
        top: CSSTop && CSSTop,
        left: CSSLeft && CSSLeft,
        right: CSSRight && CSSRight,
        xPercent: CSSTransformXPerc && CSSTransformXPerc,
      });
    }
  };

  const showSkills = () => {
    if (skillCategoryRef.current) {
      setViewingSkillCategory(true);

      if (window.innerWidth > 992) {
        SkillAnimations.showNormalSkillAnimation(
          name,
          skillCategoryRef,
          CSSLeft,
          CSSRight,
          btnRef,
          nameRef,
          imgRef,
          skillsContainerRef,
          closeBtnRef,
          skillsHeadingRef
        );
      } else if (window.innerWidth <= 992) {
        SkillAnimations.showMobileSkillAnimation(
          name,
          skillCategoryRef,
          btnRef,
          nameRef,
          imgRef,
          skillsContainerRef,
          closeBtnRef,
          skillsHeadingRef
        );
      }
    }
  };

  return (
    <div className="skills__category" id={name}>
      <div className="skills__category-container">
        <div className="skills__category-img" ref={imgRef}>
          <img src={img} alt="" />
        </div>
        <div className="skills__category-name" ref={nameRef}>
          {name}
        </div>
        <button
          className="skills__category-btn"
          ref={btnRef}
          style={{ pointerEvents: !viewingSkillCategory ? "all" : "none" }}
          disabled={viewingSkillCategory}
          onClick={() => {
            showSkills();
            setCategoryCurrentlyBeingViewed(name);
          }}
        >
          {btnText}
        </button>
        <div className="skills__skills-container" ref={skillsContainerRef}>
          {skillImages.length > 0 &&
            skillImages.map((skillImg, skillImgIndex) => (
              <div
                className={`skills__skill ${name}-skill`}
                key={skillImgIndex}
              >
                <div className={`skills__skill-img `}>
                  <img src={skillImg.img} alt="" />
                  <div className="skills__skill-status">{skillImg.status}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className="skills__category-close-btn"
        ref={closeBtnRef}
        onClick={() => {
          SkillAnimations.reverseAnimation(
            name,
            skillCategoryRef,
            btnRef,
            nameRef,
            imgRef,
            skillsContainerRef,
            closeBtnRef,
            setViewingSkillCategory,
            setCategoryCurrentlyBeingViewed,
            CSSTop,
            CSSLeft,
            CSSRight,
            CSSTransformXPerc,
            skillsHeadingRef
          );
        }}
      >
        <TimesSVG />
      </div>
    </div>
  );
};

export default SkillCategory;
