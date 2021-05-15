import { useRef, useEffect } from "react";
import { ContactAnimations } from "../../../../Animations/ContactAnimations";

const Contact = () => {
  const contactWrapperRef = useRef<HTMLElement>(null);
  const contactHeadingRef = useRef<HTMLSpanElement>(null);
  const contactSubHeadingRef = useRef<HTMLSpanElement>(null);
  const submitFormBtnRef = useRef<HTMLButtonElement>(null);
  // const formInputContainerRefs: any = useRef([]);
  // formInputContainerRefs.current = [];

  useEffect(() => {
    ContactAnimations.initialAnimations(
      contactWrapperRef,
      contactHeadingRef,
      contactSubHeadingRef,
      submitFormBtnRef
    );
  }, []);

  // const addContainerToRefs = (el: HTMLDivElement): void => {
  //   if (el && !formInputContainerRefs.current.includes(el)) {
  //     formInputContainerRefs.current.push(el);
  //   }
  // };

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
        <div className="contact__form-input-container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" required={true} />
        </div>
        <div className="contact__form-input-container">
          <label htmlFor="_replyto">Email</label>
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="contact__form-input-container">
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
