import { RefObject } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export namespace AboutAnimations {
  export const initialAnimations = (aboutRef: RefObject<HTMLElement>) => {
    gsap.registerPlugin(ScrollTrigger);

    if (aboutRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "-20% top",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.set(".about__heading span", {
        x: "-105%",
      });
      tl.to(".about__heading span", {
        x: 0,
        opacity: 1,
        ease: "circ.out",
        duration: 0.6,
        stagger: 0.1,
      });

      gsap.set(".about__paragraph-line span", {
        y: 220,
        skewY: 20,
      });
      tl.to(
        ".about__paragraph-line span",
        {
          y: 0,
          skewY: 0,
          ease: "circ.out",
          duration: 1.5,
          stagger: 0.1,
        },
        "-=1.6"
      );
    }
  };
}
