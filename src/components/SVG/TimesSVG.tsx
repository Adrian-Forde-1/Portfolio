import { FC } from "react";

interface SVGProps {
  classes?: string;
}

const TimesSVG: FC<SVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.classes}
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
    >
      <path
        d="M19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TimesSVG;
