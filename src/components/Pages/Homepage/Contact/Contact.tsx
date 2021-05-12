import { useRef, useEffect } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  const contactWrapperRef = useRef<HTMLElement>(null);
  const contactHeadingRef = useRef<HTMLSpanElement>(null);
  const contactSubHeadingRef = useRef<HTMLSpanElement>(null);
  const submitFormBtnRef = useRef<HTMLButtonElement>(null);
  const formInputContainerRefs = useRef<HTMLDivElement[]>([]);
  formInputContainerRefs.current = [];

  useEffect(() => {
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

      if (formInputContainerRefs.current) {
        tl.to(
          formInputContainerRefs.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
          },
          "-=0.9"
        );
      }
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
  }, []);

  const addContainerToRefs = (el: HTMLDivElement): void => {
    if (el && !formInputContainerRefs.current.includes(el)) {
      formInputContainerRefs.current.push(el);
    }
  };

  return (
    <section className="contact__wrapper" ref={contactWrapperRef} id="contact">
      <div className="contact__heading">
        <span ref={contactHeadingRef}>GET IN TOUCH</span>
      </div>
      <div className="contact__sub-heading">
        <span ref={contactSubHeadingRef}>Let's work together</span>
      </div>
      <form
        action="https://formspree.io/xqkdklzv"
        method="POST"
        className="contact__form"
      >
        <div className="contact__form-input-container" ref={addContainerToRefs}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" required={true} />
        </div>
        <div className="contact__form-input-container" ref={addContainerToRefs}>
          <label htmlFor="_replyto">Email</label>
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="contact__form-input-container" ref={addContainerToRefs}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
            required={true}
          ></textarea>
        </div>
        <button type="submit" ref={submitFormBtnRef}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
