import { useState } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import img from "../../assets/imgs/1749660883197-removebg-preview.png";
import { Link } from "react-router-dom";

import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import NavLinks from "./NavLinks";
import { NavberLinks } from "../../utils/data/NavberLinks";
import ThemeToggle from "../../togglethem/ThemeToggle";

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCross = () => {
    alert("nothing will happen");
  };

  return (
    <>
      <div className=" bg-[#1a1d52]   h-16 z-100 w-full fixed lg:static ">
        <div className="flex justify-between items-center px-4 py-2">
          {/* Left - Logo and Hamburger */}
          <div className="flex   items-center gap-2">
            {/* Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn btn-ghost btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            {/* <img className="w-14 md:w-20  " src={img} alt="logo" /> */}
          </div>

          {/* Center - Desktop NavLinks */}
          {/* <div className="  hidden   ">
            <NavLinks navbarLinks={NavberLinks} mode="desktop" />
          </div> */}

          {/* Right - Login Button */}
          <div className="flex items-center  gap-3">
            <Link
              onClick={handleCross}
              className="btn btn-xs btn-primary  btn-outline">
              <AiOutlineLogin className="rotate-90" />
            </Link>
          </div>

          {/* <ThemeToggle /> */}
        </div>
 

        {isMobileMenuOpen && (
          <div className="  lg:hidden pt-4  pb-4">
             
              <NavLinks
            
                navbarLinks={NavberLinks} 
                mode="mobile" 
                onLinkClick={() => setIsMobileMenuOpen(false)} // ✅ Close menu on click
              />;
          
          </div>
        )}
      </div>
    </>
  );
};

export default Navber;
