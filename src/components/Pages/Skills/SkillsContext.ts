// SVG
import FrontendSVG from "../../../resources/SVG/FrontendSVG.svg";
import BackendSVG from "../../../resources/SVG/BackendSVG.svg";
import DatabaseSVG from "../../../resources/SVG/DatabaseSVG.svg";
import OtherSkillsSVG from "../../../resources/SVG/OtherSkillsSVG.svg";

import BootstrapLogoSVG from "../../../resources/SVG/BootstrapLogoSVG.svg";
import ReactLogoSVG from "../../../resources/SVG/ReactLogoSVG.svg";
import CSS3LogoSVG from "../../../resources/SVG/CSS3LogoSVG.svg";
import HTML5LogoSVG from "../../../resources/SVG/HTML5LogoSVG.svg";
import JavascriptLogoSVG from "../../../resources/SVG/JavascriptLogoSVG.svg";
import ReduxLogoSVG from "../../../resources/SVG/ReduxLogoSVG.svg";
import SassLogoSVG from "../../../resources/SVG/SassLogoSVG.svg";

import NodeJsLogoSVG from "../../../resources/SVG/NodeJsLogoSVG.svg";
import ExpressJsLogoSVG from "../../../resources/SVG/ExpressJsLogoSVG.svg";

import MongoDBLogoSVG from "../../../resources/SVG/MongoDBLogoSVG.svg";
import MySqlLogoSVG from "../../../resources/SVG/MySqlLogoSVG.svg";
import PostgresSqlLogoSVG from "../../../resources/SVG/PostgresSqlLogoSVG.svg";

import GitLogoSVG from "../../../resources/SVG/GitLogoSVG.svg";
import FigmaLogoSVG from "../../../resources/SVG/FigmaLogoSVG.svg";

interface SkillObject {
  name: string;
  btnText: string;
  img: string;
  skillImages: string[];
}

export let skillsContext: SkillObject[] = [
  {
    name: "Frontend",
    btnText: "Inspect",
    img: FrontendSVG,
    skillImages: [
      ReactLogoSVG,
      BootstrapLogoSVG,
      CSS3LogoSVG,
      HTML5LogoSVG,
      JavascriptLogoSVG,
      ReduxLogoSVG,
      SassLogoSVG,
    ],
  },
  {
    name: "Backend",
    btnText: "Deploy",
    img: BackendSVG,
    skillImages: [NodeJsLogoSVG, ExpressJsLogoSVG],
  },
  {
    name: "Database",
    btnText: "Select",
    img: DatabaseSVG,
    skillImages: [MongoDBLogoSVG, MySqlLogoSVG, PostgresSqlLogoSVG],
  },
  {
    name: "Other",
    btnText: "Explore",
    img: OtherSkillsSVG,
    skillImages: [GitLogoSVG, FigmaLogoSVG],
  },
];
