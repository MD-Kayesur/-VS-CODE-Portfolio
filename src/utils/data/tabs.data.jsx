import About from "../../components/About/About";
import Card from "../../components/Card";
import Contact from "../../components/contact/Contact";
import Introduction from "../../components/Introduction";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

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
  {
    tabTitle: "Card.jsx",
    tabContent: <Card></Card>,
    path: "/card",
  },
];
