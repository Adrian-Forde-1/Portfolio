import IssueTrackerImg from "../../../../resources/Images/Issue Tracker Website Picture.png";
import SortingAlgoVisuzaliserImg from "../../../../resources/Images/Sorting Algorithm Visualizer Picture.png";
import ClothingWebsiteImg from "../../../../resources/Images/Clothing Website Picture.png";

export interface Project {
  img: string;
  name: string;
  description: string[];
  btnText: string;
  favourite: boolean;
}

export const projects: Project[] = [
  {
    img: IssueTrackerImg,
    name: "Issue Tracker",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis",
      "facere suscipit, enim cumque illo nesciunt temporibus nulla modi,",
      "neque, asperiores fugiat, nobis quibusdam amet consequatur!",
    ],
    btnText: "View Project",
    favourite: true,
  },
  {
    img: SortingAlgoVisuzaliserImg,
    name: "Sorting Algorithm Visualizer",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis",
      "facere suscipit, enim cumque illo nesciunt temporibus nulla modi,",
      "neque, asperiores fugiat, nobis quibusdam amet consequatur!",
    ],
    btnText: "View Project",
    favourite: false,
  },
  {
    img: ClothingWebsiteImg,
    name: "Clothing Website",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis",
      "facere suscipit, enim cumque illo nesciunt temporibus nulla modi,",
      "neque, asperiores fugiat, nobis quibusdam amet consequatur!",
    ],
    btnText: "View Project",
    favourite: false,
  },
];
