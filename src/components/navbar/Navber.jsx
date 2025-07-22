// import React, { useState } from 'react';
import { GiCrossedSabres } from "react-icons/gi";
import img from "../../assets/imgs/stock-vector-vector-emblem-of-free-popular-code-editor-1685633404-removebg-preview.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import Tabss from "../tabcomponant/TabsComponent";
import Dashbors from "../dashbord/Dashbors";
 
const Navber = () => {


const handleCross =()=>{
    alert ("nothing will happen")
}


    const current =useLocation()
    console.log(current);
  const navberLinks = [
    {
      link: "/about",
      linkTitle: "About",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
    {
      link: "/skill",
      linkTitle: "Skill",
    },
  ];
   const navbers = (
    <>
    {navberLinks.slice(0,4).map((link, index) => (
  <div key={index} className="dropdown dropdown-hover mx-2">
    <button tabIndex={0} className="btn btn-outline border-none btn-xs m-1">
      {link.linkTitle}
    </button>
    <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
))}
    </>
  );

   const navberss = (
    <>
    {navberLinks.slice(4,8).map((link, index) => (
  <div key={index} className="dropdown dropdown-hover mx-2">
    <button tabIndex={0} className="btn btn-outline border-none btn-xs m-1">
      {link.linkTitle}
    </button>
    <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
))}
    </>
  );
  return (
    <>
      <div className="bg-gray-400  ">
        <div className="  justify-between  flex ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navbers}
                
              </ul>
            </div>

             
            
              <img className="w-16" src={img} alt="" />
            
          </div>
          <div className="navbar hidden -ml-75 lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navbers}
 
 

                <li>
                
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                  />
                </li>
                {navberss}
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink onClick={handleCross} className="btn  btn-primary btn-outline ">
            
              <GiCrossedSabres></GiCrossedSabres>
            </NavLink>
          </div>


 

        </div>
       </div>
    </>
  );
};

export default Navber;
