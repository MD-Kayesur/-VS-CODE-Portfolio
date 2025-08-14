import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFont,
  
} from "react-icons/fa";
import { SiMongoose } from "react-icons/si";

import { VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

 export const DropdownData = [
    { link: "/introduction", icon: <FaHtml5 />, title: "Introduction.jsx" },
    { link: "/about", icon: < FaJs />, title: "About.js" },
    { link: "/skill", icon: <VscJson />, title: "Skill.json" },
    { link: "/projects", icon: <SiTypescript />, title: "projects.ts" },
    { link: "/contact", icon: < FaBootstrap/>, title: "Contact.jsx" },
    { link: "/card", icon: <FaFont />, title: "Card.jsx" },
    { link: "/myblog", icon: <FaReact />, title: "Myblog.jsx" },
    { link: "/feedback", icon: <SiMongoose />, title: "FeedBack.jsx" },
  ];