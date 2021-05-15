import { RefObject } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export namespace ContactAnimations {
  export const initialAnimations = (
    contactWrapperRef: RefObject<HTMLElement>,
    contactHeadingRef: RefObject<HTMLSpanElement>,
    contactSubHeadingRef: RefObject<HTMLSpanElement>,
    submitFormBtnRef: RefObject<HTMLButtonElement>
  ) => {
    gsap.registerPlugin(ScrollTrigger);

    if (contactWrapperRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactWrapperRef.current,
          start: "-5% top",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });

      if (contactHeadingRef.current) {
        tl.from(contactHeadingRef.current, {
          y: 200,
          ease: "power4.out",
          duration: 1,
        });
      }

      if (contactSubHeadingRef.current) {
        tl.from(
          contactSubHeadingRef.current,
          {
            y: 200,
            ease: "power4.out",
            duration: 1,
          },
          "-=0.9"
        );
      }

      tl.to(
        ".contact__form-input-container",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        },
        "-=0.9"
      );

      if (submitFormBtnRef.current) {
        tl.to(
          submitFormBtnRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
          },
          "-=1"
        );
      }
    }
  };
}
