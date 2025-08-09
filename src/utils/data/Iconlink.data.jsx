// // utils/data/navlinks.data.js
// import { FaRegCopy } from "react-icons/fa";
// import { ImSearch, ImGit } from "react-icons/im";
// import { VscDebugAlt, VscAccount } from "react-icons/vsc";
// import { PiFigmaLogo } from "react-icons/pi";
// import { LuSettings } from "react-icons/lu";

// export const navLinks = [
//   {
//     title: "Skill",
//     path: "/skill",
//     icon: <FaRegCopy className="text-3xl text-white" />,
//   },
//   {
//     title: "Project",
//     path: "/project",
//     icon: <ImSearch className="text-3xl text-white" />,
//   },
//   {
//     title: "Git",
//     path: "/ha",
//     icon: <ImGit className="text-3xl text-white" />,
//   },
//   {
//     title: "Debug",
//     path: "/",
//     icon: <VscDebugAlt className="text-3xl text-white" />,
//   },
//   {
//     title: "Figma",
//     path: "/",
//     icon: <PiFigmaLogo className="text-3xl text-white" />,
//   },
//   {
//     title: "Account",
//     isDropdown: true,
//     icon: <VscAccount className="text3xl text-white" />,
//     dropdownItems: ["Profile"],
//   },
//   {
//     title: "Settings",
//     isDropdown: true,
//     icon: <LuSettings className="text3xl text-white" />,
//     dropdownItems: ["Profile"],
//   },
// ];

// utils/data/navlinks.data.js
import { FaRegCopy } from "react-icons/fa";
import { ImSearch, ImGit } from "react-icons/im";
import { VscDebugAlt, VscAccount } from "react-icons/vsc";
import { PiFigmaLogo } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";

export const navLinks = [
  {
    title: "Skill",
    path: "/skill",
    icon: <FaRegCopy className="text-3xl  text-white " />,
    isDropdown: true,
    dropdownItems: ["Skill"],
  },
  {
    title: "Project",
    path: "/projects",
    icon: <ImSearch className="text-3xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Project"],
  },
  {
    title: "Git",
    path: "/contact",
    icon: <ImGit className="text-3xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Contact"],
  },
  {
    title: "Debug",
    path: "/introduction",
    icon: <VscDebugAlt className="text-3xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Introduction"],
  },
  {
    title: "Figma",
    path: "/",
    icon: <PiFigmaLogo className="text-3xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile"],
  },
  {
    title: "Account",
    icon: <VscAccount className="text-3xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile"],
  },
  {
    title: "Settings",
    icon: <LuSettings className="text-3xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile"],
  },
];
