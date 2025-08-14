import { NavLink } from "react-router-dom";
import { navLinks } from "./Iconlink.data";
// Navlinks using in dashbord
const Navlinks = () => {
  return (
    <div className="md:w-10 ml-3 md:ml-5 md:pr-5 border-r-2 border-white h-screen flex flex-col items-center justify-between">
      {/* Top icons */}
      <ul className="flex flex-col items-center gap-4 mt-10">
        {navLinks.slice(0, 5).map((link, index) => (
          <li key={index} className="text-white cursor-pointer">
            <NavLink to={link.path}>{link.icon}</NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom icons */}
      <ul className="flex flex-col items-center gap-4 mb-36  "> {/* Reduce bottom margin */}
        {navLinks.slice(5, 8).map((link, index) => (
          <li key={index} className="text-white cursor-pointer">
            <NavLink to={link.path}>{link.icon}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navlinks;
