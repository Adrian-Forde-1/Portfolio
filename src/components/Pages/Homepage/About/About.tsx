import { useEffect, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutRef = useRef<HTMLElement>(null);
  // const aboutHeadingRefs: any = useRef([]);
  // aboutHeadingRefs.current = [];
  // const paragraphLineRefs: any = useRef([]);
  // paragraphLineRefs.current = [];

  useEffect(() => {
    let aboutHeadingRefs = document.querySelectorAll(".about__heading span");
    if (aboutRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "-10% top",
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
          ease: "power4.out",
          duration: 1.8,
          stagger: 0.1,
        },
        "-=1.6"
      );
    }
  }, []);

  // const addLineToRefs = (el: HTMLDivElement): void => {
  //   if (el && !paragraphLineRefs.current.includes(el)) {
  //     paragraphLineRefs.current.push(el);
  //   }
  // };
  // const addLetterToRefs = (el: HTMLDivElement): void => {
  //   if (el && !aboutHeadingRefs.current.includes(el)) {
  //     aboutHeadingRefs.current.push(el);
  //   }
  // };

  return (
    <section className="about__wrapper" ref={aboutRef} id="about">
      <div className="about__heading">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </div>
      <div className="about__paragraph">
        <div className="about__paragraph-line">
          <span>
            Whatever name or phrase you choose to use, coding / programming /
            software engineering / computer science, etc. I love it.
          </span>
        </div>
        <div className="about__paragraph-line">
          <span>
            I've always been interested in software development from a young
            age, game developing taking up most of my interest at the time. As
            the years grew, the more I started to get my hands dirty with coding
            and turning my ideas into real tangle products.
          </span>
        </div>
        <div className="about__paragraph-line">
          <span>
            The more I code, the more I crave learning more and developing my
            skills further. I aim to be the best that I can be and stand among
            the top computer scientist in the world. To achieve these goals, I
            work hard every day and I enjoy every moment of it.
          </span>
        </div>
        <div className="about__paragraph-line">
          <span>
            I am adaptive and work fast. Slowing others down and / or being
            unreliable isn't who I am. I always aim to exceed expectations. By
            improving my skills daily, I learn new ways that I can increase the
            quality and quantity of the work I do and hold true to my words.
          </span>
        </div>
        <div className="about__paragraph-line">
          <span>
            I have strong JS fundamentals and have experience in React, Node,
            MongoDB, SQL, etc. I am also currently learning C# and .NET 5 and
            I’m always improving my skills in other areas so I that I’ll be able
            to tackle any problem thrown my way.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
