import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFont,
  FaMarkdown,
} from "react-icons/fa";
import { SiMongoose, SiSass } from "react-icons/si";

import { VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

export const DropdownData = [
   { link: "/introduction", icon: <FaHtml5 color="#E34F26" />, title: "Introduction.html" }, // HTML
  { link: "/about", icon: <FaJs color="#F7DF1E" />, title: "About.js" }, // JavaScript
  { link: "/skill", icon: <VscJson color="#E34F26" />, title: "Skill.json" }, // JSON
  { link: "/projects", icon: <SiTypescript color="#3178C6" />, title: "Projects.ts" }, // TypeScript
  { link: "/myblog", icon: <FaReact color="#61DAFB" />, title: "Myblog.jsx" }, // React JSX
  { link: "/card", icon: <SiSass color="#CC6699" />, title: "Card.scss" }, // Sass
  { link: "/contact", icon: <FaCss3Alt color="#1572B6" />, title: "Contact.css" }, // CSS
  { link: "/feedback", icon: < FaMarkdown color="#1572B6" />, title: "Feedback.md" }, // Markdown
  { link: "/addblog", icon: < FaMarkdown color="#1572B6" />, title: "AddBlog.md" }, // Markdown

];
