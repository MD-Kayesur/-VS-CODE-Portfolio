import { useState, useRef, useEffect } from "react";
import img from "../../assets/imgs/1749660883197-removebg-preview.png";
import DropdownComponent from "../dropdown/DropdownComponent ";
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
      <div className="bg-[#1a1d52] backdrop-blur-md h-16 z-[100] border-b-2 border-white w-full fixed lg:static">
        <div className="flex justify-between items-center   px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="">
              <img
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 md:w-10 cursor-pointer"
                src={img}
                alt="logo"
              />
            </div>
          </div>

          {/* Center */}
          <div className="text-white  ">Full Stack Developer - MD KAyesur</div>

          <div className="flex gap-3 ">
            <div className="text-white w-4 h-4 bg-yellow-600 rounded-full hover:cursor-pointer">
              {" "}
            </div>
             
          </div>
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
