import { FaReact } from "react-icons/fa6";
import About from "../About/About";
import Card from "../card/Card";
import Contact from "../contact/Contact";
import Introduction from "../introduction/Introduction";
import Project from "../project/Project";
import Skill from "../skill/Skill";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiDatabricks,
  SiJsonwebtokens,
  SiPrisma,
} from "react-icons/si";
import Myblog from "../myBlog/Myblog";
import FeedBack from "../feedBack/FeedBack";
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
  {
    tabTitle: "myblog.jsx",
    icon: <FaReact /> ,
    tabContent: <Myblog></Myblog>,
    path: "/myblog",
  },
  {
    tabTitle: "feedback.jsx",
    icon: <SiMongoose /> ,
    tabContent: <FeedBack></FeedBack>,
    path: "/feedback",
  },
];
