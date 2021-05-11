import { useRef, useEffect } from "react";

// Resources
import DownArrowSVG from "../../../../resources/SVG/DownArrowSVG.svg";

const HeaderScrollDown = () => {
  const rotatedTextRef = useRef<any>(null);
  // useEffect(() => {
  //     if(rotatedTextRef.current) {
  //         const circleType = new CircleType(rotatedTextRef.current).radius(80);

  //         window.addEventListener("scroll", () => {
  //             let offset = window.scrollY;
  //             offset = offset * 0.4;

  //             if(rotatedTextRef.current)
  //             rotatedTextRef.current.style.transform = `rotate(${offset})deg`;
  //         })
  //     }
  // }, [])
  return (
    <a href="#about" className="header__scroll-down">
      <div className="header__scroll-down-container">
        <div className="header__scroll-down-array">
          <img src={DownArrowSVG} alt="Scroll Down Arrow" />
        </div>
      </div>
      <span className="header__scroll-down-rotated" ref={rotatedTextRef}>
        SCROLL • SCROLL • SCROLL •
      </span>
    </a>
  );
};

export default HeaderScrollDown;
