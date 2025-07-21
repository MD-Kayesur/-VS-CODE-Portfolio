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
//     icon: <FaRegCopy className="text-2xl text-white" />,
//   },
//   {
//     title: "Project",
//     path: "/project",
//     icon: <ImSearch className="text-2xl text-white" />,
//   },
//   {
//     title: "Git",
//     path: "/ha",
//     icon: <ImGit className="text-2xl text-white" />,
//   },
//   {
//     title: "Debug",
//     path: "/",
//     icon: <VscDebugAlt className="text-2xl text-white" />,
//   },
//   {
//     title: "Figma",
//     path: "/",
//     icon: <PiFigmaLogo className="text-2xl text-white" />,
//   },
//   {
//     title: "Account",
//     isDropdown: true,
//     icon: <VscAccount className="text-xl text-white" />,
//     dropdownItems: ["Profile", "Settings", "Logout"],
//   },
//   {
//     title: "Settings",
//     isDropdown: true,
//     icon: <LuSettings className="text-xl text-white" />,
//     dropdownItems: ["Profile", "Settings", "Logout"],
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
    icon: <FaRegCopy className="text-2xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
  {
    title: "Project",
    path: "/project",
    icon: <ImSearch className="text-2xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
  {
    title: "Git",
    path: "/ha",
    icon: <ImGit className="text-2xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
  {
    title: "Debug",
    path: "/",
    icon: <VscDebugAlt className="text-2xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
  {
    title: "Figma",
    path: "/",
    icon: <PiFigmaLogo className="text-2xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
  {
    title: "Account",
    icon: <VscAccount className="text-xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
  {
    title: "Settings",
    icon: <LuSettings className="text-xl text-white" />,
    isDropdown: true,
    dropdownItems: ["Profile", "Settings", "Logout"],
  },
];
