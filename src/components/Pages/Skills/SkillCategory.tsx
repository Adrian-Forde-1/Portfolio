import { useRef, FC, RefObject, useState, useEffect, useCallback } from "react";
import SkillAnimations from "../../../Animations/SkillAnimations";

// GSAP
import gsap from "gsap";

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
}) => {
  enum DISPLAY_TYPES {
    "MOBILE" = "MOBILE",
    "DESKTOP" = "DESKTOP",
  }

  const imgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLDivElement>(null);
  let skillsContainer = useRef<HTMLDivElement[]>([]);
  skillsContainer.current = [];
  let skillCategoryRef = useRef<HTMLDivElement>(null);

  const [CSSTop, setCSSTop] = useState<number>(0);
  const [CSSLeft, setCSSLeft] = useState<string>("");
  const [CSSRight, setCSSRight] = useState<string>("");
  const CSSWidth = useState<string>("200")[0];
  const CSSHeight = useState<string>("300")[0];
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
  const [CSSTransformXPerc, setCSSTransformXPerc] = useState<string>("0");

  // GSAP Timeline
  let skillTl = gsap.timeline();

  useEffect(() => {
    const setPositioningValues = () => {
      console.log("Viewing skill category", viewingSkillCategory);
      if (window.innerWidth > 992) {
        setCSSTop(
          Math.ceil((categoryIndex - 2 + 1) / 2) * top +
            Math.ceil((categoryIndex + 1) / 2) * 60
        );

        setCSSLeft((categoryIndex + 1) % 2 !== 0 ? "25%" : "initial");
        setCSSRight((categoryIndex + 1) % 2 === 0 ? "25%" : "initial");
        setCSSTransformXPerc("0");
        setCurrentDisplayType(DISPLAY_TYPES.DESKTOP);
      } else if (window.innerWidth <= 992) {
        let topExtra = categoryIndex !== 0 ? categoryIndex * 80 : 30;
        setCSSTop(categoryIndex * top + topExtra);
        setCSSLeft("50%");
        setCSSRight("initial");
        setCSSTransformXPerc("-50");
        setCurrentDisplayType(DISPLAY_TYPES.MOBILE);
      }
    };

    window.addEventListener("resize", () => {
      console.log(skillCategoriesRef.current);
      if (!viewingSkillCategory) {
        setPositioningValues();
      } else {
        if (window.innerWidth > 992) {
          if (currentDisplayType === DISPLAY_TYPES.DESKTOP) return;
        } else if (window.innerWidth <= 992) {
          if (currentDisplayType === DISPLAY_TYPES.MOBILE)
            return animateFromNormalToMobile();
        }
      }
    });

    setPositioningValues();

    if (skillCategoriesRef.current) {
      gsap.to(skillCategoriesRef.current, {
        opacity: 1,
      });

      skillCategoriesRef.current.forEach((element: HTMLDivElement) => {
        if (element.getAttribute("id") !== name) {
          skillCategoryRef.current = element;
        }
      });
    }
  }, []);

  // useEffect(() => {
  //   // console.log("Current display type: ", currentDisplayType);
  //   // console.log("View skill category: ", viewingSkillCategory);
  //   console.log("Current display type changed");
  //   if (viewingSkillCategory) {
  //     if (currentDisplayType === DISPLAY_TYPES.DESKTOP) return;
  //     if (currentDisplayType === DISPLAY_TYPES.MOBILE)
  //       return showMobileSkillAnimation();
  //   }
  // }, [currentDisplayType]);

  const showSkills = () => {
    // console.log("Show skill called");
    let skillsElement = document.querySelector("#skills");
    skillsElement?.scrollIntoView();

    let htmlElement: HTMLHtmlElement | null = document.getElementsByTagName(
      "html"
    )[0];
    if (htmlElement) htmlElement.style.overflow = "hidden";

    setViewingSkillCategory(true);

    if (window.innerWidth > 992) {
      SkillAnimations.showNormalSkillAnimation(
        skillCategoriesRef,
        skillTl,
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
        skillTl,
        name,
        skillCategoryRef,
        btnRef,
        nameRef,
        imgRef,
        skillsContainerRef,
        closeBtnRef
      );
    }
  };

  const animateFromNormalToMobile = () => {
    // console.log("Animate from normal to mobile called");
    // console.log(imgRef.current);
    // console.log(nameRef.current);
    // skillTl
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

  const animateFromMobileToNormal = () => {
    // console.log("Animate from normal to mobile called");
    // console.log(imgRef.current);
    // console.log(nameRef.current);
    // skillTl
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

  const reverseAnimation = () => {
    // setViewingSkillCategory(false);
    console.log("reverse animation called");
    if (closeBtnRef.current) {
      skillTl.to(closeBtnRef.current, {
        opacity: 0,
        rotate: "540",
        pointerEvents: "none",
        duration: 0.7,
      });
    }

    let skills = document.querySelectorAll(`.${name}-skill`);
    skillTl
      .to(
        skills,
        {
          duration: 0.2,
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          stagger: -0.08,
        },
        "-=0.5"
      )
      .to(skillsContainerRef.current, {
        width: "0",
        height: "0",
        top: "initial",
        y: "initial",
        left: "initial",
        marginLeft: "initial",
        padding: "initial",
        duration: 0.5,
      })
      .to(
        nameRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          duration: 0.3,
        },
        "-=0.8"
      )
      .to(nameRef.current, {
        top: "200",
        y: "initial",
        xPercent: -50,
        left: "50%",
        marginLeft: "initial",
        duration: 0,
      })
      .to(
        skillCategoryRef.current,
        {
          width: "200",
          height: "300",
          left: CSSLeft,
          right: CSSRight,
          top: CSSTop,
          xPercent: CSSTransformXPerc,
          zIndex: "initial",
          duration: 0.7,
        },
        "-=0.5"
      )
      .to(
        imgRef.current,
        {
          top: "0px",
          y: "0px",
          width: "200",
          height: "200",
          xPercent: -50,
          left: "50%",
          marginLeft: "0%",
          duration: 0.7,
        },
        "-=0.7"
      )
      .to(
        nameRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.3,
        },
        "-=0.2"
      )
      .to(
        btnRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.3,
        },
        "-=0.2"
      )
      .to(skillCategoriesRef.current, {
        duration: 0.3,
        opacity: 1,
        stagger: 0.1,
        onComplete: () => {
          let htmlElement: HTMLHtmlElement | null = document.getElementsByTagName(
            "html"
          )[0];
          if (htmlElement) htmlElement.style.overflow = "initial";

          gsap.to(skillCategoriesRef.current, {
            pointerEvents: "all",
          });
        },
      })
      .to(btnRef.current, {
        pointerEvents: "all",
      });
  };

  return (
    <div
      className="skills__category"
      ref={addSkillToRefs}
      id={name}
      style={{
        top: `${CSSTop}px`,
        left: `${CSSLeft}`,
        right: `${CSSRight}`,
        transform: `translateX(${CSSTransformXPerc}%)`,
      }}
    >
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
        <div
          className="skills__category-btn"
          ref={btnRef}
          onClick={() => {
            showSkills();
          }}
        >
          {btnText}
        </div>
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
          reverseAnimation();
        }}
      >
        <TimesSVG />
      </div>
    </div>
  );
};

export default SkillCategory;
