import About from "../../components/About/About";
import Contact from "../../components/About/Contact";
import Introduction from "../../components/About/Introduction";
import Project from "../../components/About/Project";
import Skill from "../../components/About/Skill";

export const tabs = [
  {
    tabTitle: "About",
    tabContent: <About />,
    path: "/about",
  },
  {
    tabTitle: "Skill",
    tabContent: <Skill></Skill>
      
    ,
    path: "/skill",
  },
  {
    tabTitle: "Project",
    tabContent: <Project></Project>,
    path: "/projects",
  },
  {
    tabTitle: "Introduction",
    tabContent: (
       <Introduction></Introduction>
    ),
    path: "/introduction",
  },
  {
    tabTitle: "Contact",
    tabContent: (
       <Contact></Contact>
    ),
    path: "/contact",
  },
];
