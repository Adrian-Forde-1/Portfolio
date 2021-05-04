import { FC } from "react";

interface SVGProps {
  classes?: string;
}

const HTML5LogoSVG: FC<SVGProps> = (props) => {
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
        d="M255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11z"
        fill="#E44D26"
      />
      <path
        d="M128 337.95l84.417-23.403l19.86-222.49H128V337.95z"
        fill="#F16529"
      />
      <path
        d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704z"
        fill="#EBEBEB"
      />
      <path
        d="M90.018 236.542h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471z"
        fill="#EBEBEB"
      />
      <path
        d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0z"
        fill="#000"
      />
      <path
        d="M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001z"
        fill="#000"
      />
      <path
        d="M130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0z"
        fill="#000"
      />
      <path d="M193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" fill="#000" />
      <path
        d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937z"
        fill="#FFF"
      />
      <path
        d="M127.89 155.854v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86z"
        fill="#FFF"
      />
    </svg>
  );
};

export default HTML5LogoSVG;
