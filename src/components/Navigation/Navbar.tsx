import { useEffect, useRef, FC } from "react";

// React Router DOM
import { withRouter, Link } from "react-router-dom";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar: FC = (props: any) => {
  gsap.registerPlugin(ScrollTrigger);

  const navListItems = useRef<HTMLLIElement[]>([]);
  navListItems.current = [];

  useEffect(() => {
    if (navListItems.current) {
      console.log(props);
      if (sessionStorage.getItem("anim-played")) {
        if (props.location?.pathname.indexOf("project") > -1) {
          gsap.set(navListItems.current, {
            y: 0,
            opacity: 1,
          });
        } else {
          gsap.set(navListItems.current, {
            y: 0,
            opacity: 1,
          });
        }
      } else {
        if (props.location?.pathname.indexOf("project") > -1) {
          gsap.set(navListItems.current, {
            y: 0,
            opacity: 1,
          });
        } else {
          gsap.set(navListItems.current, {
            y: "100%",
            opacity: 1,
          });
          gsap.to(navListItems.current, {
            y: 0,
            duration: 1,
            stagger: 0.1,
            delay: 2.8,
          });
        }
      }
    }
  }, []);

  const addItemToRefs = (el: HTMLLIElement): void => {
    if (el && !navListItems.current.includes(el)) {
      navListItems.current.push(el);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__list-item" ref={addItemToRefs}>
            <a href="/#about">
              <span>About</span>
            </a>
          </li>
          <li className="navbar__list-item" ref={addItemToRefs}>
            <a href="/#skills">
              <span>Skills</span>
            </a>
          </li>
          <li className="navbar__list-item" ref={addItemToRefs}>
            <a href="/#projects">
              <span>Projects</span>
            </a>
          </li>
          <li className="navbar__list-item" ref={addItemToRefs}>
            <a href="/#contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
