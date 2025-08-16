import { FaReact } from "react-icons/fa6";
import About from "../About/About";
import Card from "../card/Card";
import Contact from "../contact/Contact";
import Introduction from "../introduction/Introduction";
import Project from "../project/Project";
import Skill from "../skill/Skill";
import { 
  
  SiSass,
  SiTypescript
} from "react-icons/si";
import Myblog from "../myBlog/Myblog";
import FeedBack from "../feedBack/FeedBack";
import { FaCss3Alt, FaHtml5, FaJs, FaMarkdown } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import AddBlog from "../myBlog/addBlog";
 
export const tabs = [
  {
    tabTitle: "About.js",
    icon: <FaJs color="#F7DF1E" />, // JavaScript
    tabContent: <About />,
    path: "/about",
  },
  {
    tabTitle: "Skill.json",
    icon: <VscJson color="#E34F26" />, // JSON
    tabContent: <Skill />,
    path: "/skill",
  },
  {
    tabTitle: "Project.ts",
    icon: <SiTypescript color="#3178C6" />, // TypeScript
    tabContent: <Project />,
    path: "/projects",
  },
  {
    tabTitle: "Introduction.html",
    icon: <FaHtml5 color="#E34F26" />, // HTML
    tabContent: <Introduction />,
    path: "/introduction",
  },
  {
    tabTitle: "Contact.css",
    icon: <FaCss3Alt color="#1572B6" />, // TypeScript (TSX)
    tabContent: <Contact />,
    path: "/contact",
  },
  {
    tabTitle: "Card.jsx",
    icon: <SiSass color="#CC6699" />, // JSX
    tabContent: <Card />,
    path: "/card",
  },
  {
    tabTitle: "Myblog.jsx",
    icon: <FaReact color="#61DAFB" />, // JSX
    tabContent: <Myblog />,
    path: "/myblog",
  },
  {
    tabTitle: "Feedback.md",
    icon: <FaMarkdown color="#1572B6" />, // Markdown
    tabContent: <FeedBack />,
    path: "/feedback",
  },
  {
    tabTitle: "AddBlog.md",
    icon: <FaMarkdown color="#1572B6" />, // Markdown
    tabContent: <AddBlog />,
    path: "/addblog",
  },
];

