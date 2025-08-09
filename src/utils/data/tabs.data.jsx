import About from "../../components/About/About";
import Card from "../../components/Card";
import Contact from "../../components/contact/Contact";
import Introduction from "../../components/Introduction";
import Project from "../../components/Project";
import Skill from "../../components/Skill";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiDatabricks,
  SiJsonwebtokens,
  SiPrisma,
} from "react-icons/si";
export const tabs = [
  {
    tabTitle: "About.jsx",
    icon: <SiMongodb /> ,
    tabContent: <About />,
    path: "/about",
  },
  {
    tabTitle: "Skill.jsx",
     icon: <SiExpress /> ,
    tabContent: <Skill></Skill>,
    path: "/skill",
  },
  {
    tabTitle: "Project.jsx",
     icon: <SiMongoose /> ,
    tabContent: <Project></Project>,
    path: "/projects",
  },
  {
    tabTitle: "Introduction.jsx",
    icon: <SiJsonwebtokens /> ,
    tabContent: <Introduction></Introduction>,
    path: "/introduction",
  },
  {
    tabTitle: "Contact.jsx",
    icon: <SiDatabricks /> ,
    tabContent: <Contact></Contact>,
    path: "/contact",
  },
  {
    tabTitle: "Card.jsx",
    icon: <SiFirebase /> ,
    tabContent: <Card></Card>,
    path: "/card",
  },
];
