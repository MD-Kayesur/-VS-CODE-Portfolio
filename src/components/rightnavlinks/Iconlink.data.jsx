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
//     icon: <FaRegCopy className="text-3xl  " />,
//   },
//   {
//     title: "Project",
//     path: "/project",
//     icon: <ImSearch className="text-3xl  " />,
//   },
//   {
//     title: "Git",
//     path: "/ha",
//     icon: <ImGit className="text-3xl  " />,
//   },
//   {
//     title: "Debug",
//     path: "/",
//     icon: <VscDebugAlt className="text-3xl  " />,
//   },
//   {
//     title: "Figma",
//     path: "/",
//     icon: <PiFigmaLogo className="text-3xl  " />,
//   },
//   {
//     title: "Account",
//     isDropdown: true,
//     icon: <VscAccount className="text3xl  " />,
//     dropdownItems: ["Profile"],
//   },
//   {
//     title: "Settings",
//     isDropdown: true,
//     icon: <LuSettings className="text3xl  " />,
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
  icon: <FaRegCopy className="md:text-2xl lg:3xl" color="#4CAF50" />, // Copy icon (green)
  isDropdown: true,
  dropdownItems: ["Skill"],
},
{
  title: "Project",
  path: "/projects",
  icon: <ImSearch className="md:text-2xl lg:3xl" color="#FF9800" />, // Search (orange)
  isDropdown: true,
  dropdownItems: ["Project"],
},
{
  title: "Git",
  path: "/contact",
  icon: <ImGit className="md:text-2xl lg:3xl" color="#F05032" />, // Git (official red/orange)
  isDropdown: true,
  dropdownItems: ["Contact"],
},
{
  title: "Debug",
  path: "/introduction",
  icon: <VscDebugAlt className="md:text-2xl lg:3xl" color="#FFCC00" />, // Debug (yellow-ish)
  isDropdown: true,
  dropdownItems: ["Introduction"],
},
{
  title: "Figma",
  path: "/about",
  icon: <PiFigmaLogo className="md:text-2xl lg:3xl" color="#F24E1E" />, // Figma (main red-orange brand color)
  isDropdown: true,
  dropdownItems: ["Profile"],
},
{
  title: "Account",
  path: "/feedback",
  icon: <VscAccount className="md:text-2xl lg:3xl" color="#2196F3" />, // Account (blue)
  isDropdown: true,
  dropdownItems: ["Profile"],
},
{
  title: "Settings",
  path: "/myblog",
  icon: <LuSettings className="md:text-2xl lg:3xl" color="#9C27B0" />, // Settings (purple)
  isDropdown: true,
  dropdownItems: ["Profile"],
},
];
