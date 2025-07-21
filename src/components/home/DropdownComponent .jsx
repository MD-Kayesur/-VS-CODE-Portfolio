import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/skill",
      title: "Skill",
    },
    {
      link: "/projects",
      title: "Project",
    },
  ];

  return (
    <div className="text-sm font-medium text-gray-800 ">
      <div
        onClick={toggleDropdown}
        className="flex items-center  gap-2 pr-2 cursor-pointer select-none pl-3 w-full">
        <span className="">MY Portfolio</span>
        {isOpen ? (
          <FaChevronDown className="text-xs" />
        ) : (
          <FaChevronRight className="text-xs" />
        )}
      </div>

      {isOpen && (
        <ul className="ml-4 ">
          {navLinks.map((navLink, index) => (
            <li key={index} className="mt-2 ">
              <NavLink
                to={navLink.link}
                className={({ isActive }) =>
                  `block w-full py-1 text-sm ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200 text-black"
                  }`
                }>
                {navLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
