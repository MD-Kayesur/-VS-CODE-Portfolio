import About from "../../components/About/About";
import Contact from "../../components/About/Contact";
import Introduction from "../../components/About/Introduction";
import Project from "../../components/About/Project";
import Skill from "../../components/About/Skill";

export const tabs = [
  {
    tabTitle: "About.jsx",
    tabContent: <About />,
    path: "/about",
  },
  {
    tabTitle: "Skill.jsx",
    tabContent: <Skill></Skill>,
    path: "/skill",
  },
  {
    tabTitle: "Project.jsx",
    tabContent: <Project></Project>,
    path: "/projects",
  },
  {
    tabTitle: "Introduction.jsx",
    tabContent: <Introduction></Introduction>,
    path: "/introduction",
  },
  {
    tabTitle: "Contact.jsx",
    tabContent: <Contact></Contact>,
    path: "/contact",
  },
];
