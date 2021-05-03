import React, { useRef, FC, RefObject, useEffect } from "react";

// GSAP
import gsap from "gsap";

interface skillProps {
  name: string;
  img: string;
  addSkillToRefs: (el: HTMLDivElement) => void;
  homepageRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  skillCategoriesRef: RefObject<HTMLDivElement[]>;
  top?: number;
  btnText: string;
}

const SkillCategory: FC<skillProps> = ({
  name,
  img,
  addSkillToRefs,
  skillCategoriesRef,
  top = 0,
  btnText,
  homepageRef,
  skillsRef,
}) => {
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const btnRef = useRef(null);
  const skillsContainerRef = useRef(null);
  const closeBtnRef = useRef(null);
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

          if (btnRef.current) {
            skillTl.to(btnRef.current, {
              opacity: 0,
              pointerEvents: "none",
              duration: 0.3,
            });
          }

          if (nameRef.current) {
            skillTl
              .to(
                nameRef.current,
                {
                  opacity: 0,
                  duration: 0.3,
                },
                "-=0.3"
              )
              .to(nameRef.current, {
                top: "50%",
                y: "-200",
                left: "520",
                marginLeft: "5%",
              });
          }

          skillTl.to(
            element,
            {
              width: "100%",
              height: "100vh",
              top: "0px",
              left: "0px",
              xPercent: "0",
              duration: 0.7,
            },
            "-=0.3"
          );

          if (imgRef.current) {
            skillTl.to(
              imgRef.current,
              {
                top: "50%",
                y: "-50%",
                width: "400",
                height: "400",
                left: "200",
                marginLeft: "5%",
                duration: 0.7,
              },
              "-=0.7"
            );
          }

          if (closeBtnRef.current) {
            skillTl
              .to(
                closeBtnRef.current,
                {
                  top: "50%",
                  y: "-200",
                  right: "0%",
                  marginRight: "5%",
                  duration: 0.1,
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
          if (skillsContainerRef.current) {
            skillTl.to(
              skillsContainerRef.current,
              {
                width: "calc(90% - 400px)",
                height: "380",
                top: "calc(50% + 50px)",
                y: "-200",
                left: "400",
                marginLeft: "5%",
                padding: "20",
                duration: 0.5,
                onComplete: () => {
                  let skills = document.querySelectorAll(`.${name}-skill`);

                  if (skills.length > 0) {
                    gsap.to(skills, {
                      duration: 0.2,
                      opacity: 1,
                      stagger: 0.1,
                    });
                  }
                },
              },
              "-=0.5"
            );
          }

          if (nameRef.current) {
            skillTl.to(
              nameRef.current,
              {
                opacity: 1,
                duration: 0.3,
              },
              "-=0.5"
            );
          }
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

    if (skillsContainerRef.current) {
      let skills = document.querySelectorAll(`.${name}-skill`);
      skillTl
        .to(
          skills,
          {
            duration: 0.2,
            opacity: 0,
            stagger: -0.1,
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
        });
    }

    if (nameRef.current) {
      skillTl
        .to(
          nameRef.current,
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.5"
        )
        .to(nameRef.current, {
          top: "200",
          y: "initial",
          left: "50%",
          marginLeft: "initial",
          duration: 0,
        });
    }

    skillTl.to(skillsContainer, {
      width: "50%",
      height: "300",
      top: `${top}px`,
      left: "50%",
      xPercent: "-50",
      duration: 0.7,
    });

    if (imgRef.current) {
      skillTl.to(
        imgRef.current,
        {
          top: "0px",
          y: "0px",
          width: "200",
          height: "200",
          left: "50%",
          marginLeft: "0%",
          duration: 0.7,
        },
        "-=0.7"
      );
    }

    if (nameRef.current) {
      skillTl.to(
        nameRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.2"
      );
    }
    if (btnRef.current) {
      skillTl.to(
        btnRef.current,
        {
          opacity: 1,
          pointerEvents: "all",
          duration: 0.3,
        },
        "-=0.2"
      );
    }

    if (skillCategoriesRef.current) {
      skillCategoriesRef.current.forEach((element) => {
        if (element.getAttribute("id") !== name) {
          skillTl.to(element, {
            duration: 0.3,
            opacity: 1,
            pointerEvents: "all",
          });
        }
      });
    }
  };

  return (
    <>
      <div
        className="skills__category"
        ref={addSkillToRefs}
        id={name}
        style={{ top: `${top}px` }}
      >
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
            <div className={`skills__skill ${name}-skill`}>
              <div className={`skills__skill-img `}>
                <img src={img} alt="" />
              </div>
            </div>
            <div className={`skills__skill ${name}-skill`}>
              <div className={`skills__skill-img `}>
                <img src={img} alt="" />
              </div>
            </div>
            <div className={`skills__skill ${name}-skill`}>
              <div className={`skills__skill-img `}>
                <img src={img} alt="" />
              </div>
            </div>
            <div className={`skills__skill ${name}-skill`}>
              <div className={`skills__skill-img `}>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="skills__category-close-btn"
          ref={closeBtnRef}
          onClick={() => {
            reverseAnimation();
          }}
        >
          &times;
        </div>
      </div>
    </>
  );
};

export default SkillCategory;
