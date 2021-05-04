import { FC } from "react";

interface SVGProps {
  classes?: string;
}

const BootstrapLogoSVG: FC<SVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.classes}
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
    >
      <path
        d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z"
        fill="#563D7C"
      />
      <path
        d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76c2.822.506 5.319 1.41 7.49 2.713c2.17 1.303 3.907 3.112 5.21 5.427c1.302 2.316 1.954 5.283 1.954 8.9c0 6.513-1.954 11.217-5.862 14.111c-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605c6.585-1.737 12.446-4.414 17.584-8.032c5.137-3.618 9.226-8.286 12.265-14.002c3.04-5.717 4.559-12.483 4.559-20.298c0-9.697-2.352-17.982-7.055-24.856c-4.704-6.875-11.832-11.687-21.384-14.437c6.947-3.328 12.194-7.598 15.74-12.808c3.545-5.21 5.318-11.722 5.318-19.538c0-7.236-1.194-13.314-3.582-18.235c-2.388-4.92-5.753-8.864-10.095-11.831c-4.341-2.967-9.551-5.102-15.63-6.404c-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102c4.486 3.401 6.73 9.081 6.73 17.041c0 4.053-.688 7.381-2.063 9.986c-1.375 2.605-3.22 4.668-5.536 6.187c-2.315 1.52-4.993 2.605-8.032 3.257c-3.04.65-6.223.976-9.552.976h-36.47z"
        fill="#FFF"
      />
    </svg>
  );
};

export default BootstrapLogoSVG;
