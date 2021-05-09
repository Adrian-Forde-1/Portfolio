import { RefObject, Dispatch, SetStateAction } from "react";

// Gsap
import gsap from "gsap";

// Display Types
import { DISPLAY_TYPES } from "../Configuration/DisplayConfiguration";

namespace SkillAnimations {
  export const showNormalSkillAnimation = (
    skillCategoriesRef: RefObject<HTMLDivElement[]>,
    name: string,
    skillCategoryRef: RefObject<HTMLDivElement>,
    CSSLeft: string,
    CSSRight: string,
    btnRef: RefObject<HTMLButtonElement>,
    nameRef: RefObject<HTMLDivElement>,
    imgRef: RefObject<HTMLDivElement>,
    skillsContainerRef: RefObject<HTMLDivElement>,
    closeBtnRef: RefObject<HTMLDivElement>
  ): void => {
    let newTimeline = gsap.timeline();

    if (skillCategoriesRef.current) {
      skillCategoriesRef.current.forEach((element) => {
        if (element.getAttribute("id") !== name) {
          gsap.to(element, {
            duration: 0.3,
            opacity: 0,
            pointerEvents: "none",
          });
        } else {
          skillCategoryRef.current = element;

          if (skillCategoryRef.current) {
            newTimeline
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
                  width: "calc(100% - 7px)",
                  height: "100vh",
                  top: 0,
                  left: CSSLeft === "initial" ? "initial" : "0%",
                  right: CSSRight === "initial" ? "initial" : "0%",
                  xPercent: "initial",
                  zIndex: 100,
                  duration: 0.7,
                  ease: "power1.out",
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
                  xPercent: "initial",
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
        }
      });
      newTimeline.play(0);
    }
  };

  export const showMobileSkillAnimation = (
    skillCategoriesRef: RefObject<HTMLDivElement[]>,
    name: string,
    skillCategoryRef: RefObject<HTMLDivElement>,
    btnRef: RefObject<HTMLButtonElement>,
    nameRef: RefObject<HTMLDivElement>,
    imgRef: RefObject<HTMLDivElement>,
    skillsContainerRef: RefObject<HTMLDivElement>,
    closeBtnRef: RefObject<HTMLDivElement>
  ): void => {
    let newTimeline = gsap.timeline();

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
          skillCategoryRef.current = element;

          if (skillCategoryRef.current) {
            newTimeline
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
                top: "370",
                xPercent: -50,
                left: "50%",
              })
              .to(
                element,
                {
                  width: "100%",
                  height: "100vh",
                  top: 0,
                  left: 0,
                  right: "initial",
                  xPercent: 0,
                  zIndex: 100,
                  duration: 0.7,
                  transformOrigin: "center",
                  ease: "power1.out",
                },
                "-=0.3"
              )
              .to(
                imgRef.current,
                {
                  top: "0%",
                  width: "350",
                  height: "350",
                  left: "50%",
                  xPercent: -50,
                  duration: 0.7,
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
                  left: "50%",
                  padding: "20px 5%",
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
                  y: "370",
                  top: "0%",
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
        }
      });
      newTimeline.play(0);
    }
  };

  export const animateFromNormalToMobile = (
    name: string,
    categoryCurrentlyBeingViewed: string,
    nameRef: RefObject<HTMLDivElement>,
    imgRef: RefObject<HTMLDivElement>,
    skillsContainerRef: RefObject<HTMLDivElement>,
    closeBtnRef: RefObject<HTMLDivElement>
  ) => {
    if (name === categoryCurrentlyBeingViewed) {
      const newTimeline = gsap.timeline();

      newTimeline
        .to(
          imgRef.current,
          {
            top: "0%",
            y: "initial",
            width: "350",
            height: "350",
            marginLeft: "initial",
            left: "50%",
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

      newTimeline.play(0);
    }
  };

  export const animateFromMobileToNormal = (
    name: string,
    categoryCurrentlyBeingViewed: string,
    nameRef: RefObject<HTMLDivElement>,
    imgRef: RefObject<HTMLDivElement>,
    skillsContainerRef: RefObject<HTMLDivElement>,
    closeBtnRef: RefObject<HTMLDivElement>
  ) => {
    if (name === categoryCurrentlyBeingViewed) {
      const newTimeline = gsap.timeline();

      newTimeline
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
          nameRef.current,
          {
            top: "50%",
            y: "-200",
            left: "calc(440px + 5%)",
            xPercent: "initial",
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
            xPercent: "initial",
            left: "calc(440px + 5%)",
            padding: "20px 20px",
            duration: 0.7,
          },
          "-=0.7"
        )
        .to(
          closeBtnRef.current,
          {
            top: "50%",
            y: "-200",
            right: "0%",
            marginRight: "5%",
            duration: 0.7,
          },
          "-=0.7"
        );

      newTimeline.play(0);
    }
  };

  export const reverseAnimation = (
    skillCategoriesRef: RefObject<HTMLDivElement[]>,
    name: string,
    skillCategoryRef: RefObject<HTMLDivElement>,
    btnRef: RefObject<HTMLButtonElement>,
    nameRef: RefObject<HTMLDivElement>,
    imgRef: RefObject<HTMLDivElement>,
    skillsContainerRef: RefObject<HTMLDivElement>,
    closeBtnRef: RefObject<HTMLDivElement>,
    setViewingSkillCategory: Dispatch<SetStateAction<boolean>>,
    setCategoryCurrentlyBeingViewed: Dispatch<SetStateAction<string>>,
    CSSTop: string,
    CSSLeft: string,
    CSSRight: string,
    CSSTransformXPerc: string
  ) => {
    setViewingSkillCategory(false);
    const newTimeline = gsap.timeline({
      onComplete: () => {
        setCategoryCurrentlyBeingViewed("");
      },
    });

    let skills = document.querySelectorAll(`.${name}-skill`);
    newTimeline
      .to(closeBtnRef.current, {
        opacity: 0,
        rotate: "0",
        pointerEvents: "none",
        duration: 0.7,
      })
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
        xPercent: "initial",
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
          width: 200,
          height: 300,
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

    newTimeline.play(0);
  };
}

export default SkillAnimations;
