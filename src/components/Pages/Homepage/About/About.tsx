import { useEffect, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutRef = useRef<HTMLDivElement>(null);
  const paragraphLineRefs = useRef<HTMLDivElement[]>([]);
  paragraphLineRefs.current = [];

  useEffect(() => {
    if (aboutRef.current && paragraphLineRefs.current) {
      gsap.to(paragraphLineRefs.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          markers: true,
        },
      });
    }
  }, []);

  const addLineToRefs = (el: HTMLDivElement): void => {
    if (el && !paragraphLineRefs.current.includes(el)) {
      paragraphLineRefs.current.push(el);
    }
  };

  return (
    <div className="about__wrapper" ref={aboutRef}>
      <div className="about__heading">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </div>
      <div className="about__paragraph">
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            I've always been dabbling in code, getting to know a little of the
            languages that interest me like Java, C++ and Python.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            I even went in further by studying a bit of android development with
            java and open gl with C++ but the thing that peeked my interest was
            Web Development.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            The ability to make my ideas appear before my eyes quickly and to
            share them with others on a website that I created was something I
            previously haven't encountered.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            Ever since I found this amazing field, I've been striving to be the
            best developer I can be.
          </span>
        </div>
        <div className="about__paragraph-line" ref={addLineToRefs}>
          <span>
            I have strong JS fundamentals and have experience in React, Node and
            MongoDB but I’m always improving my skills so I that I’ll be able to
            tackle any problem thrown my way.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
