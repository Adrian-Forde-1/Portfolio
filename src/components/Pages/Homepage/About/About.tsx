import { useEffect, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLDivElement>(null);
  const paragraphLineRefs = useRef<HTMLDivElement[]>([]);
  paragraphLineRefs.current = [];

  useEffect(() => {
    if (aboutRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "-10% top",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
      if (aboutHeadingRef.current) {
        tl.to(aboutHeadingRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.5,
        });
      }

      if (paragraphLineRefs.current) {
        tl.to(
          paragraphLineRefs.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        );
      }
    }
  }, []);

  const addLineToRefs = (el: HTMLDivElement): void => {
    if (el && !paragraphLineRefs.current.includes(el)) {
      paragraphLineRefs.current.push(el);
    }
  };

  return (
    <div className="about__wrapper" ref={aboutRef} id="about">
      <div className="about__heading" ref={aboutHeadingRef}>
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </div>
      <div className="about__paragraph">
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            Whatever name or phrase you choose to use, coding / programming /
            software engineering / computer science, etc. I love it.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            I've always been interested in software development from a young
            age, game developing taking up most of my interest at the time. As
            the years grew, the more I started to get my hands dirty with coding
            and turning my ideas into real tangle products.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            The more I code, the more I crave learning more and developing my
            skills further. I aim to be the best that I can be and stand among
            the top computer scientist in the world. To achieve these goals, I
            work hard every day and I enjoy every moment of it.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            I am adaptive and work fast. Slowing others down and / or being
            unreliable isn't who I am. I always aim to exceed expectations. By
            improving my skills daily, I learn new ways that I can increase the
            quality and quantity of the work I do and hold true to my words.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            I have strong JS fundamentals and have experience in React, Node,
            MongoDB, SQL, etc. I am also currently learning C# and .NET 5 and
            I’m always improving my skills in other areas so I that I’ll be able
            to tackle any problem thrown my way.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
