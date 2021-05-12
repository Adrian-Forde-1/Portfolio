import IssueTrackerImg from "../../../../resources/Images/Issue Tracker Website Picture.png";
import SortingAlgoVisuzaliserImg from "../../../../resources/Images/Sorting Algorithm Visualizer Picture.png";
import ClothingWebsiteImg from "../../../../resources/Images/Clothing Website Picture.png";

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

// Issue Tracker Images
import IssueTrackerCreateLabel from "../../../../resources/Images/IssueTracker/Issue-Tracker-Create-Label.png";
import IssueTrackerCreateProject from "../../../../resources/Images/IssueTracker/Issue-Tracker-Create-Project.png";
import IssueTrackerIssueManagement from "../../../../resources/Images/IssueTracker/Issue-Tracker-Issue-Management.png";
import IssueTrackerLabelManagement from "../../../../resources/Images/IssueTracker/Issue-Tracker-Manage-Labels.png";
import IssueTrackerRealTimeChat from "../../../../resources/Images/IssueTracker/Issue-Tracker-Real-time-team-chat.png";
import IssueTrackerUpdateIssue from "../../../../resources/Images/IssueTracker/Issue-Tracker-Update-Issue.png";

export interface Feature {
  img: string;
  text: string;
  textTitle?: string;
}
export interface Project {
  img: string;
  link: string;
  name: string;
  description: string[];
  summary: string;
  btnText: string;
  stack: string[];
  favourite: boolean;
  liveLink?: string;
  githubLink?: string;
  longName: boolean;
  features: Feature[];
  featureEndingStatement?: string;
}

export const StackImg = {
  React: ReactLogoSVG,
  Bootstrap: BootstrapLogoSVG,
  CSS3: CSS3LogoSVG,
  HTML5: HTML5LogoSVG,
  Javascript: JavascriptLogoSVG,
  Redux: ReduxLogoSVG,
  Sass: SassLogoSVG,
  Typescript: TypescriptSVG,
  "Node Js": NodeJsLogoSVG,
  "Express Js": ExpressJsLogoSVG,
  "C#": CSharpLogo,
  ".NET 5": NETCoreLogo,
  MongoDB: MongoDBLogoSVG,
  MySQL: MySqlLogoSVG,
  "Postgres SQL": PostgresSqlLogoSVG,
  Git: GitLogoSVG,
  Figma: FigmaLogoSVG,
};

export const projects: Project[] = [
  {
    img: IssueTrackerImg,
    link: "issue-tracker",
    name: "Issue Tracker",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis",
      "facere suscipit, enim cumque illo nesciunt temporibus nulla modi,",
      "neque, asperiores fugiat, nobis quibusdam amet consequatur!",
    ],
    summary: `Aimed toward developers, this website helps with managing your bugs during development and production. It also features teams where you can work alongside a group of individuals for a faster work flow.`,
    liveLink: "https://af-issue-tracker.herokuapp.com/",
    githubLink: "https://github.com/Adrian-Forde-1/issue-tracker",
    stack: [
      StackImg.React,
      StackImg.Redux,
      StackImg["Node Js"],
      StackImg.HTML5,
      StackImg.CSS3,
      StackImg.Sass,
      StackImg.MongoDB,
      StackImg.Git,
      StackImg.Javascript,
    ],
    btnText: "View Project",
    favourite: true,
    longName: false,
    featureEndingStatement:
      "These are just some of the features that my issue tracker has. I would love if you would visit it and try it out for yourself. The website is always being updating to improving it's functionality and increase it's feature set. Feedback from your time on the website would be greatly appreciated.",
    features: [
      {
        img: IssueTrackerCreateProject,
        text: "Every user can create project. These projects can either be personal projects or they can be assigned to a team.",
        textTitle: "Create Project",
      },
      {
        img: IssueTrackerIssueManagement,
        text: "Issues can be managed from within the project. You can search for issues using the search and filter feature and you can easly identify issues using their status indicator.",
        textTitle: "Issue Management",
      },
      {
        img: IssueTrackerUpdateIssue,
        text: "You can view issues for more information. On this page, you can choose to update the status, make a comment, edit the issue, view it's update history and more.",
        textTitle: "Issues",
      },
      {
        img: IssueTrackerRealTimeChat,
        text: "Utilizing web sockets, real time team chat allows you to stay up to date on what you team is doing.",
        textTitle: "Real Time Team Chat",
      },
      {
        img: IssueTrackerLabelManagement,
        text: "You can manage the labels that will be used throughout you project. You can choose to edit, delete or create new labels.",
        textTitle: "Label Management",
      },

      {
        img: IssueTrackerCreateLabel,
        text: "You have the ability to create you own custom labels that you can then you on the issue of that project",
        textTitle: "Add Labels",
      },
    ],
  },
  {
    img: SortingAlgoVisuzaliserImg,
    link: "sorting-algoritm-visualizer",
    name: "Sorting Algorithm Visualizer",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis",
      "facere suscipit, enim cumque illo nesciunt temporibus nulla modi,",
      "neque, asperiores fugiat, nobis quibusdam amet consequatur!",
    ],
    liveLink: "https://adrian-forde-1.github.io/Sorting-Algorithm-Visualizer/",
    githubLink:
      "https://github.com/Adrian-Forde-1/Sorting-Algorithm-Visualizer",
    summary: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
    facere suscipit, enim cumque illo nesciunt temporibus nulla modi
    neque, asperiores fugiat, nobis quibusdam amet consequatur!`,
    stack: [],
    btnText: "View Project",
    favourite: false,
    longName: true,
    features: [
      {
        img: "",
        text: "",
      },
    ],
  },
  {
    img: ClothingWebsiteImg,
    link: "clothing-website",
    name: "Clothing Website",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis",
      "facere suscipit, enim cumque illo nesciunt temporibus nulla modi,",
      "neque, asperiores fugiat, nobis quibusdam amet consequatur!",
    ],
    summary: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
    facere suscipit, enim cumque illo nesciunt temporibus nulla modi
    neque, asperiores fugiat, nobis quibusdam amet consequatur!`,
    liveLink: "https://github.com/Adrian-Forde-1/Clothing-Website",
    githubLink: "https://adrian-forde-1.github.io/Clothing-Website/#/",
    stack: [],
    btnText: "View Project",
    favourite: false,
    longName: false,
    features: [
      {
        img: "",
        text: "",
      },
    ],
  },
];
