// SVG
import FrontendSVG from "../../../../resources/SVG/FrontendSVG.svg";
import BackendSVG from "../../../../resources/SVG/BackendSVG.svg";
import DatabaseSVG from "../../../../resources/SVG/DatabaseSVG.svg";
import OtherSkillsSVG from "../../../../resources/SVG/OtherSkillsSVG.svg";

import BootstrapLogoSVG from "../../../../resources/SVG/BootstrapLogoSVG.svg";
import ReactLogoSVG from "../../../../resources/SVG/ReactLogoSVG.svg";
import CSS3LogoSVG from "../../../../resources/SVG/CSS3LogoSVG.svg";
import HTML5LogoSVG from "../../../../resources/SVG/HTML5LogoSVG.svg";
import JavascriptLogoSVG from "../../../../resources/SVG/JavascriptLogoSVG.svg";
import ReduxLogoSVG from "../../../../resources/SVG/ReduxLogoSVG.svg";
import SassLogoSVG from "../../../../resources/SVG/SassLogoSVG.svg";
import TypescriptSVG from "../../../../resources/SVG/TypescriptSVG.svg";

import NodeJsLogoSVG from "../../../../resources/SVG/NodeJsLogoSVG.svg";
import ExpressJsLogoSVG from "../../../../resources/SVG/ExpressJsLogoSVG.svg";
import CSharpLogo from "../../../../resources/SVG/CSharpLogo.svg";
import NETCoreLogo from "../../../../resources/SVG/NETCoreLogo.svg";

import MongoDBLogoSVG from "../../../../resources/SVG/MongoDBLogoSVG.svg";
import MySqlLogoSVG from "../../../../resources/SVG/MySqlLogoSVG.svg";
import PostgresSqlLogoSVG from "../../../../resources/SVG/PostgresSqlLogoSVG.svg";

import GitLogoSVG from "../../../../resources/SVG/GitLogoSVG.svg";
import FigmaLogoSVG from "../../../../resources/SVG/FigmaLogoSVG.svg";

interface SkillObject {
  img: string;
  status: string;
}

interface SkillCategory {
  name: string;
  btnText: string;
  img: string;
  skillImages: SkillObject[];
}

export let skillsContext: SkillCategory[] = [
  {
    name: "Frontend",
    btnText: "Inspect",
    img: FrontendSVG,
    skillImages: [
      { img: ReactLogoSVG, status: "" },
      { img: ReduxLogoSVG, status: "" },
      { img: HTML5LogoSVG, status: "" },
      { img: JavascriptLogoSVG, status: "" },
      { img: TypescriptSVG, status: "" },
      { img: CSS3LogoSVG, status: "" },
      { img: SassLogoSVG, status: "" },
      { img: BootstrapLogoSVG, status: "" },
    ],
  },
  {
    name: "Backend",
    btnText: "Deploy",
    img: BackendSVG,
    skillImages: [
      { img: NodeJsLogoSVG, status: "" },
      { img: ExpressJsLogoSVG, status: "" },
      { img: CSharpLogo, status: "Learning" },
      { img: NETCoreLogo, status: "Learning" },
    ],
  },
  {
    name: "Database",
    btnText: "Select",
    img: DatabaseSVG,
    skillImages: [
      { img: MongoDBLogoSVG, status: "" },
      { img: MySqlLogoSVG, status: "" },
      { img: PostgresSqlLogoSVG, status: "" },
    ],
  },
  {
    name: "Other",
    btnText: "Explore",
    img: OtherSkillsSVG,
    skillImages: [
      { img: GitLogoSVG, status: "" },
      { img: FigmaLogoSVG, status: "" },
    ],
  },
];
