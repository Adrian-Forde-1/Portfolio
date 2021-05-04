import { useRef, FC, RefObject, useState } from "react";

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
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const btnRef = useRef(null);
  const skillsContainerRef = useRef(null);
  const closeBtnRef = useRef(null);

  const CSSTop: number = useState(
    Math.ceil((categoryIndex - 2 + 1) / 2) * top +
      Math.ceil((categoryIndex + 1) / 2) * 60
  )[0];
  const CSSLeft: string = useState(
    (categoryIndex + 1) % 2 !== 0 ? "25%" : "initial"
  )[0];
  const CSSRight: string = useState(
    (categoryIndex + 1) % 2 === 0 ? "25%" : "initial"
  )[0];

  let skillsContainer: HTMLDivElement;

  // GSAP Timeline
  let skillTl = gsap.timeline();

  const showSkills = () => {
    let skillsElement = document.querySelector("#skills");
    skillsElement?.scrollIntoView();

    if (skillCategoriesRef.current) {
      skillCategoriesRef.current.forEach((element) => {
        if (element.getAttribute("id") !== name) {
          let tl = gsap.timeline();
          tl.to(element, {
            duration: 0.3,
            opacity: 0,
            pointerEvents: "none",
          });
        } else {
          skillsContainer = element;
          let elementLeftValue: number | string =
            CSSLeft !== "initial" ? 0 : "initial";
          let elementRightValue: number | string =
            CSSRight !== "initial" ? 0 : "initial";

          skillTl
            .to(btnRef.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              pointerEvents: "none",
              duration: 0.2,
              ease: "none",
            })
            .to(
              nameRef.current,
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 0.2,
                ease: "none",
              },
              "-=0.1"
            )
            .to(nameRef.current, {
              top: "50%",
              y: "-200",
              left: "calc(440px + 5%)",
              xPercent: "initial",
            })
            .to(
              element,
              {
                width: "100%",
                height: "100vh",
                top: 0,
                left: elementLeftValue,
                right: elementRightValue,
                zIndex: 100,
                duration: 0.7,
              },
              "-=0.3"
            )
            .to(
              imgRef.current,
              {
                top: "50%",
                y: "-50%",
                width: "400",
                height: "400",
                left: "0",
                xPercent: "initial",
                marginLeft: "5%",
                duration: 0.7,
              },
              "-=0.7"
            )
            .to(
              skillsContainerRef.current,
              {
                width: "calc(90% - 400px)",
                height: "380",
                top: "calc(50% + 50px)",
                y: "-200",
                left: "calc(440px + 5%)",
                padding: "20",
                duration: 0.5,
                onComplete: () => {
                  let skills = document.querySelectorAll(`.${name}-skill`);

                  if (skills.length > 0) {
                    gsap.to(skills, {
                      duration: 0.3,
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                      stagger: 0.08,
                      ease: "none",
                    });
                  }
                },
              },
              "-=0.5"
            )
            .to(
              nameRef.current,
              {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.3,
              },
              "-=0.1"
            )
            .to(
              closeBtnRef.current,
              {
                top: "50%",
                y: "-200",
                right: "0%",
                marginRight: "5%",
                duration: 0,
              },
              "-=0.5"
            )
            .to(closeBtnRef.current, {
              opacity: 1,
              rotate: "540",
              pointerEvents: "all",
              duration: 0.7,
            });
        }
      });
    }
  };

  const reverseAnimation = () => {
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
        skillsContainer,
        {
          width: "200",
          height: "300",
          left: CSSLeft,
          right: CSSRight,
          top: CSSTop,
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
          gsap.to(skillCategoriesRef.current, {
            pointerEvents: "all",
          });
        },
      })
      .to(btnRef.current, {
        pointerEvents: "all",
      });

    // if (skillCategoriesRef.current) {
    //   skillCategoriesRef.current.forEach((element) => {
    //     if (element.getAttribute("id") !== name) {
    //       skillTl;
    //     }
    //   });
    // }
  };

  return (
    <>
      <div
        className="skills__category"
        ref={addSkillToRefs}
        id={name}
        style={{
          top: `${CSSTop}px`,
          left: `${CSSLeft}`,
          right: `${CSSRight}`,
        }}
      >
        {console.log(Math.ceil((categoryIndex + 1) / 2) * top)}
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
            onClick={() => showSkills()}
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
                    <div className="skills__skill-status">
                      {skillImg.status}
                    </div>
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
    </>
  );
};

export default SkillCategory;
