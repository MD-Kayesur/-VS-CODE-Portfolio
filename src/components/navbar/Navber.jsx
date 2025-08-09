import { useState, useRef, useEffect } from "react";
import img from "../../assets/imgs/1749660883197-removebg-preview.png";
import DropdownComponent from "../home/DropdownComponent ";

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="bg-[#1a1d52] h-16 z-100 w-full fixed lg:static">
        <div className="flex justify-between items-center   px-4 py-2">
          {/* Left - Logo and Hamburger */}
          <div className="flex items-center gap-2">
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
            <img className="w-10 md:w-10" src={img} alt="logo" />
          </div>

          {/* Center */}
          <div className="text-white  ">Full Stack Developer - MD KAyesur</div>

          <div className="text-white"> hi</div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={dropdownRef}
            className="bg-red-400/50 backdrop-blur w-full lg:hidden pt-4 pb-4 relative">
            <button
              className="absolute top-2 right-3 text-white text-lg hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}>
              ✕
            </button>
            <DropdownComponent onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navber;
