import IssueTrackerImg from "../../../../resources/Images/Issue Tracker Website Picture.png";
import SortingAlgoVisualiserImg from "../../../../resources/Images/Sorting Algorithm Visualizer Picture.png";
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

import SortingAlgoVisualizerAdjustment from "../../../../resources/Images/SortingAlgorithmVisualizer/Sorting-Algorithm-Visualizer-Adjustment.png";
import SortingAlgoVisualizerAlgorithms from "../../../../resources/Images/SortingAlgorithmVisualizer/Sorting-Algorithm-Visualizer-Algorithms.png";
import SortingAlgoVisualizerSlowMotion from "../../../../resources/Images/SortingAlgorithmVisualizer/Sorting-Algorithm-Visualizer-Slow-Motion.png";
import SortingAlgoVisualizerVisualize from "../../../../resources/Images/SortingAlgorithmVisualizer/Sorting-Algorithm-Visualizer-Visualize.png";

import ClothingWebsiteCart from "../../../../resources/Images/ClothingWebsite/Clothing-Website-Cart.png";
import ClothingWebsiteCleanLayout from "../../../../resources/Images/ClothingWebsite/Clothing-Website-Clean-Layout.png";
import ClothingWebsiteFavourites from "../../../../resources/Images/ClothingWebsite/Clothing-Website-Favourites.png";
import ClothingWebsiteItemPage from "../../../../resources/Images/ClothingWebsite/Clothing-Website-Item-Page.png";
import ClothingWebsiteItems from "../../../../resources/Images/ClothingWebsite/Clothing-Website-Items.png";

import PathfindingAlgorithmVisualizerVisualize from "../../../../resources/Images/PathfindingAlgorithmVisualizer/Pathfinding-Algorithm-Visualizer-Visualize.png";
import PathfindingAlgorithmVisualizerCleanLayout from "../../../../resources/Images/PathfindingAlgorithmVisualizer/Pathfinding-Algorithm-Visualizer-Clean-Layout.png";
import PathfindingAlgorithmVisualizerBackTrack from "../../../../resources/Images/PathfindingAlgorithmVisualizer/Pathfinding-Algorithm-Visualizer-Back-Track.png";
import PathfindingAlgorithmVisualizerAlgorithms from "../../../../resources/Images/PathfindingAlgorithmVisualizer/Pathfinding-Algorithm-Visualizer-Algorithms.png";
import PathfindingAlgorithmVisualizerCreateWalls from "../../../../resources/Images/PathfindingAlgorithmVisualizer/Pathfinding-Algorithm-Visualizer-Create-Walls.png";

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
  projectStatus?: string;
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
      "Aimed toward developers, this website helps with managing your bugs",
      "during development and production. It also features teams where",
      "you can work alongside a group of individuals for a faster work flow.",
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
    img: SortingAlgoVisualiserImg,
    link: "sorting-algoritm-visualizer",
    name: "Sorting Algorithm Visualizer",
    description: [
      "One of my first ever projects on github. A Sorting Algorithm Visualizer",
      "made after following Clement Mihailescu's youtube video and expanding ",
      "upon it by implementing new features, sorting algorithms and styling",
    ],
    liveLink: "https://adrian-forde-1.github.io/Sorting-Algorithm-Visualizer/",
    githubLink:
      "https://github.com/Adrian-Forde-1/Sorting-Algorithm-Visualizer/tree/master",
    summary: `One of my first ever projects on github. A Sorting Algorithm Visualizer made after following Clement Mihailescu's youtube video and expanding upon it by implementing new features, sorting algorithms and styling`,
    stack: [
      StackImg.React,
      StackImg.Javascript,
      StackImg.HTML5,
      StackImg.CSS3,
      StackImg.Git,
    ],
    btnText: "View Project",
    favourite: false,
    longName: true,
    features: [
      {
        img: SortingAlgoVisualizerVisualize,
        text: "Visualize any of the algorithms provided.",
        textTitle: "Visualize",
      },
      {
        img: SortingAlgoVisualizerAlgorithms,
        text: "Multiple algorithms to choose from.",
        textTitle: "Algorithms",
      },
      {
        img: SortingAlgoVisualizerAdjustment,
        text: "Increase and decrease the number of items to sort. Make it faster or slower. Change it up and see how the visualization changes.",
        textTitle: "Adjustment",
      },

      {
        img: SortingAlgoVisualizerSlowMotion,
        text: "Enjoy the ultra-slow mode and see how things are sorted with each algorithm.",
        textTitle: "Slow Motion",
      },
    ],
  },
  {
    img: ClothingWebsiteImg,
    link: "clothing-website",
    name: "Clothing Website",
    description: [
      'My first every "serious" project. I made this project a few months',
      "after I decided to get serious about coding and I'm proud of it because ",
      "it showed me how hard work can pay off. It came out better than...",
    ],
    summary: `My first every "serious" project. I made this project a few months after I decided to get serious about coding and I'm proud of it because it showed me how hard work can pay off. It came out better than anything I thought I was capable of making at the time and I love it to this day even though the code is bad :)`,
    liveLink: "https://github.com/Adrian-Forde-1/Clothing-Website",
    githubLink: "https://adrian-forde-1.github.io/Clothing-Website/#/",
    stack: [
      StackImg.React,
      StackImg.Javascript,
      StackImg.Git,
      StackImg.HTML5,
      StackImg.CSS3,
      StackImg.Sass,
    ],
    btnText: "View Project",
    favourite: false,
    longName: false,
    features: [
      {
        img: ClothingWebsiteCleanLayout,
        text: "Clean, simple and effective layout with easy to use navigation.",
        textTitle: "Clean Layout",
      },
      {
        img: ClothingWebsiteCart,
        text: "A cart system which holds the items that you want to purchase. You can't buy anything though.",
        textTitle: "Cart",
      },

      {
        img: ClothingWebsiteFavourites,
        text: "Favourites lets you keep track of the items you like and gives you an easy way to return to them.",
        textTitle: "Favourites",
      },
      {
        img: ClothingWebsiteItemPage,
        text: "You can click on an item and view it. Here, you can select the colour and size before purchasing.",
        textTitle: "View Items",
      },
      {
        img: ClothingWebsiteItems,
        text: "Hover over items with multiple colours to see a carousel of all the colours.",
        textTitle: "Items with Carousels :)",
      },
    ],
  },
  {
    img: PathfindingAlgorithmVisualizerVisualize,
    link: "pathfinding-algorithm-visualizer",
    name: "Pathfinding Algorithm Visualizer",
    projectStatus: "Work In Progress",
    description: [
      "A pathfinding visualizer that allows you to choose an algorithm",
      "and see the shortest part that it creates. The main purpose of this",
      "project was to help me improve with algorthms and data strutures.",
    ],
    summary: `A pathfinding visualizer that allows you to choose an algorithm and see the shortest part that it creates. The main purpose of this project was to help me improve with algorthms and data strutures.`,
    liveLink: "https://adrian-forde-1.github.io/Pathfinding-Visualizer/",
    githubLink:
      "https://github.com/Adrian-Forde-1/Pathfinding-Visualizer/tree/master",
    stack: [
      StackImg.Javascript,
      StackImg.Git,
      StackImg.HTML5,
      StackImg.CSS3,
      StackImg.Sass,
    ],
    btnText: "View Project",
    favourite: false,
    longName: true,
    features: [
      {
        img: PathfindingAlgorithmVisualizerCleanLayout,
        text: "Clean, simple and easy to use layout.",
        textTitle: "Clean Layout",
      },
      {
        img: PathfindingAlgorithmVisualizerVisualize,
        text: "Visualize algorthms and see how they functions and the amazing visual effects they create.",
        textTitle: "Visualize",
      },

      {
        img: PathfindingAlgorithmVisualizerBackTrack,
        text: "After visualizations, the algorithm back tracks to show the shortest path from the start to end node.",
        textTitle: "Shortest Path",
      },
      {
        img: PathfindingAlgorithmVisualizerCreateWalls,
        text: "Create walls and see how the algorithms get around them.",
        textTitle: "Create Walls",
      },
      {
        img: PathfindingAlgorithmVisualizerAlgorithms,
        text: "Choose an algorithm and see how it works.",
        textTitle: "Algorithms",
      },
    ],
  },
];
