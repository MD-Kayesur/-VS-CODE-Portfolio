
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFont,
} from "react-icons/fa";

import { SiTailwindcss, SiChakraui, SiNextdotjs, SiRedux, SiGraphql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiDatabricks,
  SiJsonwebtokens,
  SiPrisma,
} from "react-icons/si";

  export const frontskills = [
 { title: "HTML", icon: <FaHtml5 color="#E34F26" /> },             // HTML5 orange
{ title: "CSS", icon: <FaCss3Alt color="#1572B6" /> },           // CSS3 blue
{ title: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },   // Bootstrap purple
{ title: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> }, // Tailwind teal
{ title: "Chakra UI", icon: <SiChakraui color="#319795" /> },    // Chakra UI green-teal
{ title: "JavaScript", icon: <FaJs color="#F7DF1E" /> }, // JS yellow + shadow for visibility
{ title: "React", icon: <FaReact color="#61DAFB" /> },           // React cyan
{ title: "Next.js", icon: <SiNextdotjs color="#000000" /> },      // Next.js black
{ title: "Redux", icon: <SiRedux color="#764ABC" /> }, 
  ];



 export const backendSkills = [
      { title: "Node.js", icon: <FaNodeJs color="#339933" /> },              // Node.js green
{ title: "Express.js", icon: <SiExpress color="#000000" /> },         // Express.js black
{ title: "MongoDB", icon: <SiMongodb color="#47A248" /> },            // MongoDB green
{ title: "Mongoose", icon: <SiMongoose color="#880000" /> },          // Mongoose dark red
{ title: "NoSQL", icon: <SiDatabricks color="#FF6F00" /> },           // NoSQL orange (Databricks color)
{ title: "Firebase", icon: <SiFirebase color="#FFCA28" /> },           // Firebase yellow
{ title: "JWT", icon: <SiJsonwebtokens color="#000000" /> },          // JWT black
{ title: "Prisma", icon: <SiPrisma color="#0D1117" /> }, 
{ title: "GraphQL", icon: <SiGraphql color="#E10098" /> },  // ORM alternative to Mongoose
    ];