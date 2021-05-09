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
import { DISPLAY_TYPES } from "../../../Configuration/DisplayConfiguration";

// GSAP
import gsap from "gsap";
import SkillAnimations from "../../../Animations/SkillAnimations";

// SVG
import TimesSVG from "../../SVG/TimesSVG";

interface skillProps {
  name: string;
  img: string;
  addSkillToRefs: (el: HTMLDivElement) => void;
  skillCategoriesRef: RefObject<HTMLDivElement[]>;
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
}

const SkillCategory: FC<skillProps> = ({
  name,
  img,
  addSkillToRefs,
  skillCategoriesRef,
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
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLDivElement>(null);
  let skillsContainer = useRef<HTMLDivElement[]>([]);
  skillsContainer.current = [];
  let skillCategoryRef = useRef<HTMLDivElement>(null);

  const [CSSTop, setCSSTop] = useState<string>("");
  const [CSSLeft, setCSSLeft] = useState<string>("");
  const [CSSRight, setCSSRight] = useState<string>("");
  const [CSSTransformXPerc, setCSSTransformXPerc] = useState<string>("");
  const [
    initialPositionValuesSet,
    setInitialPositionValuesSet,
  ] = useState<boolean>(false);

  // GSAP Timeline
  let skillCatTimeline = gsap.timeline();

  useEffect(() => {
    skillCategoriesRef.current?.forEach((element: HTMLDivElement) => {
      if (element?.getAttribute("id") === name)
        skillCategoryRef.current = element;
    });

    const setPositioningValues = () => {
      if (window.innerWidth > 992) {
        setCSSTop(
          (
            Math.ceil((categoryIndex - 1) / 2) * top +
            Math.ceil((categoryIndex + 1) / 2) * 60
          ).toString()
        );

        setCSSLeft((categoryIndex + 1) % 2 !== 0 ? "25%" : "initial");
        setCSSRight((categoryIndex + 1) % 2 === 0 ? "25%" : "initial");
        setCSSTransformXPerc((prevState) => (prevState = "0"));
        setCurrentDisplayType(DISPLAY_TYPES.DESKTOP);
      } else if (window.innerWidth <= 992) {
        // let topExtra = categoryIndex !== 0 ? categoryIndex * 80 : 50;
        setCSSTop((categoryIndex * top + 50 * categoryIndex + 50).toString());
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
      skillCategoriesRef.current &&
      !initialPositionValuesSet &&
      CSSTop !== "" &&
      CSSLeft !== "" &&
      CSSRight !== "" &&
      CSSTransformXPerc !== ""
    ) {
      console.log("initial positioning");
      setAndPositionElement();
      setInitialPositionValuesSet(true);
    }
  }, [CSSTop, CSSLeft, CSSRight, CSSTransformXPerc]);

  useEffect(() => {
    if (viewingSkillCategory) {
      if (currentDisplayType === DISPLAY_TYPES.DESKTOP) return;
      if (
        currentDisplayType === DISPLAY_TYPES.MOBILE &&
        skillCategoryRef.current
      )
        animateFromNormalToMobile();
    } else {
      if (name === "Backend") {
        console.log("responsive positioning");
      }
    }
  }, [currentDisplayType]);

  useEffect(() => {
    if (!viewingSkillCategory) setAndPositionElement();
  }, [CSSTop, CSSLeft, CSSRight, CSSTransformXPerc, viewingSkillCategory]);

  const setAndPositionElement = () => {
    if (skillCategoryRef.current) {
      if (name === "Backend") {
        console.log(CSSTop, CSSLeft, CSSRight, CSSTransformXPerc);
      }

      gsap.to(skillCategoryRef.current, {
        top: CSSTop && CSSTop,
        left: CSSLeft && CSSLeft,
        right: CSSRight && CSSRight,
        xPercent: CSSTransformXPerc && CSSTransformXPerc,
      });
    }
  };

  const showSkills = () => {
    let skillsElement = document.querySelector("#skills");
    skillsElement?.scrollIntoView();

    let htmlElement: HTMLHtmlElement | null = document.getElementsByTagName(
      "html"
    )[0];
    if (skillCategoryRef.current) {
      if (htmlElement) htmlElement.style.overflow = "hidden";

      setViewingSkillCategory(true);

      if (window.innerWidth > 992) {
        SkillAnimations.showNormalSkillAnimation(
          skillCategoriesRef,
          skillCatTimeline,
          name,
          skillCategoryRef,
          CSSLeft,
          CSSRight,
          btnRef,
          nameRef,
          imgRef,
          skillsContainerRef,
          closeBtnRef
        );
      } else if (window.innerWidth <= 992) {
        SkillAnimations.showMobileSkillAnimation(
          skillCategoriesRef,
          skillCatTimeline,
          name,
          skillCategoryRef,
          btnRef,
          nameRef,
          imgRef,
          skillsContainerRef,
          closeBtnRef
        );
      }
    }
  };

  const animateFromNormalToMobile = () => {
    // console.log("Animate from normal to mobile called");
    // console.log(imgRef.current);
    // console.log(nameRef.current);

    if (name === categoryCurrentlyBeingViewed) {
      // console.log(imgRef.current);
      // console.log(nameRef.current);
      // console.log(skillsContainerRef.current);
      // console.log(closeBtnRef.current);

      skillCatTimeline
        .to(
          imgRef.current,
          {
            top: "0%",
            y: "initial",
            width: "350",
            height: "350",
            marginLeft: "initial",
            left: "50%",
            borderColor: "#ff0000",
            borderWidth: "1px",
            borderStyle: "solid",
            xPercent: -50,
            duration: 0.7,
          },
          "-=0.7"
        )
        .to(
          nameRef.current,
          {
            top: "370",
            xPercent: -50,
            y: "initial",
            left: "50%",
          },
          "-=0.7"
        )
        .to(
          skillsContainerRef.current,
          {
            width: "100%",
            height: "380",
            top: "410",
            xPercent: -50,
            y: "initial",
            left: "50%",
            padding: "20px 5%",
            duration: 0.5,
          },
          "-=0.7"
        )
        .to(
          closeBtnRef.current,
          {
            top: "370",
            y: "initial",
            duration: 0.7,
          },
          "-=0.7"
        );
    }
  };

  const animateFromMobileToNormal = () => {
    // console.log("Animate from normal to mobile called");
    // console.log(imgRef.current);
    // console.log(nameRef.current);
    // skillCatTimeline
    //   .to(
    //     imgRef.current,
    //     {
    //       top: "0%",
    //       y: "initial",
    //       width: "350",
    //       height: "350",
    //       marginLeft: "initial",
    //       left: "50%",
    //       borderColor: "#ff0000",
    //       borderWidth: "1px",
    //       borderStyle: "solid",
    //       xPercent: -50,
    //       duration: 0.7,
    //     },
    //     "-=0.7"
    //   )
    //   .to(
    //     nameRef.current,
    //     {
    //       top: "370",
    //       xPercent: -50,
    //       y: "initial",
    //       left: "50%",
    //     },
    //     "-=0.7"
    //   )
    //   .to(
    //     skillsContainerRef.current,
    //     {
    //       width: "100%",
    //       height: "380",
    //       top: "410",
    //       xPercent: -50,
    //       y: "initial",
    //       left: "50%",
    //       padding: "20px 5%",
    //       duration: 0.5,
    //     },
    //     "-=0.7"
    //   )
    //   .to(
    //     closeBtnRef.current,
    //     {
    //       top: "370",
    //       y: "initial",
    //       duration: 0.7,
    //     },
    //     "-=0.7"
    //   );
    // cona zxcsadas
  };

  return (
    <div className="skills__category" ref={addSkillToRefs} id={name}>
      <button
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 10000,
          cursor: "pointer",
        }}
        onClick={() => animateFromNormalToMobile()}
      >
        Resize button
      </button>
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
            skillCategoriesRef,
            skillCatTimeline,
            name,
            skillCategoryRef,
            btnRef,
            nameRef,
            imgRef,
            skillsContainerRef,
            closeBtnRef,
            setViewingSkillCategory,
            CSSTop,
            CSSLeft,
            CSSRight,
            CSSTransformXPerc
          );
        }}
      >
        <TimesSVG />
      </div>
    </div>
  );
};

export default SkillCategory;
