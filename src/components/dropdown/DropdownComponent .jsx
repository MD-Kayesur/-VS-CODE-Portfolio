// import React, { useState } from "react";
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
//   FaJs,
//   FaReact,
//   FaFont,
// } from "react-icons/fa";
// const DropdownComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//      {
//       link: "/introduction",
//        icon: <FaHtml5 />,
//       title: "Introduction.jsx",
//     },
//     {
//       link: "/about",
//       icon: <FaBootstrap></FaBootstrap>,
//       title: "About.jsx",
//     },
//     {
//       link: "/skill",
//       icon: <FaReact />,
//       title: "Skill.jsx",
//     },
//     {
//       link: "/projects",
//        icon: <FaCss3Alt />,
//       title: "projects.jsx",
//     },
//     {
//       link: "/contact",
//        icon: <FaJs />,
//       title: "Contact.jsx",
//     },
//     {
//       link: "/card",
//        icon: <FaFont />,
//       title: "Card.jsx",
//     },

//   ];

//   return (
//     <div className="text-sm font-medium text-gray-800 ">
//       <div
//         onClick={toggleDropdown}
//         className="flex items-center  gap-2 pr-2 cursor-pointer select-none pl-3 w-full">
//         <span className=" text-white">MY Portfolio</span>
//         {isOpen ? (
//           <FaChevronDown className="text-xs text-white" />
//         ) : (
//           <FaChevronRight className="text-xs text-white" />
//         )}
//       </div>

//       {isOpen && (
//         <ul className=" ">
//           {navLinks.map((navLink, index) => (
//             <li key={index} className="mt-2 ">
//               <NavLink
//                 to={navLink.link}
//                 className={({ isActive }) =>
//                   `block w-full py-1  pl-2 text-sm text-white ${
//                     isActive
//                       ? "bg-red-500 text-white"
//                       : "hover:bg-gray-200 hover:text-black"
//                   }`
//                 }>
//                   <div className=" pl-3 flex gap-2 items-center">
// <span className="text-yellow-500">{navLink.icon}</span>
//                 <span>{navLink.title}</span>
//                   </div>
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownComponent;

import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { DropdownData } from "./DropdownData";

const DropdownComponent = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="  font-medium  ">
      <div
        onClick={toggleDropdown}
        className="flex items-center h-2 gap-2 pr-2 cursor-pointer select-none pl-3 w-full">
        <span className=" ">My Portfolio</span>
        {isOpen ? (
          <FaChevronDown className="text-xs  " />
        ) : (
          <FaChevronRight className="text-xs  " />
        )}
      </div>

      {isOpen && (
        <ul>
          {DropdownData.map((navLink, index) => (
            <li key={index} className="mt-2">
              <NavLink
                to={navLink.link}
                onClick={onClose} // ✅ click করলে dropdown বন্ধ
                className={({ isActive }) =>
                  `block w-full py-1 pl-2 text-sm  ${
                    isActive
                      ? "bg-red-500  "
                      : "hover:bg-gray-200 hover:text-black"
                  }`
                }>
                <div className="pl-3 flex  gap-2 items-center">
                  <span className=" ">{navLink.icon}</span>
                  <span>{navLink.title}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
