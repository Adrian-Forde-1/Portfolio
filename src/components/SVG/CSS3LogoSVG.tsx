import { FC } from "react";

interface SVGProps {
  classes?: string;
}

const CSS3LogoSVG: FC<SVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.classes}
      aria-hidden="true"
      focusable="false"
      width="0.71em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 361"
    >
      <path
        d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962z"
        fill="#264DE4"
      />
      <path
        d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z"
        fill="#2965F1"
      />
      <path
        d="M53.669 188.636l2.862 31.937H128v-31.937H53.669z"
        fill="#EBEBEB"
      />
      <path
        d="M47.917 123.995l2.903 31.937H128v-31.937H47.917z"
        fill="#EBEBEB"
      />
      <path
        d="M128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58z"
        fill="#EBEBEB"
      />
      <path
        d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0z"
        fill="#000"
      />
      <path
        d="M106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0z"
        fill="#000"
      />
      <path
        d="M153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0z"
        fill="#000"
      />
      <path
        d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576z"
        fill="#FFF"
      />
    </svg>
  );
};

export default CSS3LogoSVG;
