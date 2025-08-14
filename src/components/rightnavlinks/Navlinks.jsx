import { NavLink } from "react-router-dom";
import { navLinks } from "./Iconlink.data";
// Navlinks using in dashbord
const Navlinks = () => {
  return (
    <div className="md:w-10 ml-3 md:ml-5 lg:pt-5 md:pt-18 md:pr-5 border-r-1 border-white h-screen flex flex-col items-center justify-between">
      {/* Top icons */}
      <ul className="flex flex-col items-center  lg:gap-8 md:gap-2 ">
        {navLinks.slice(0, 5).map((link, index) => (
          <li key={index} className="text-white cursor-pointer">
      <div
        className="tooltip tooltip-right"
        data-tip={link.title} // Tooltip text
      >
        <NavLink to={link.path} className="relative">
          {link.icon}
        </NavLink>
      </div>
    </li>
        ))}
      </ul>

      {/* Bottom icons */}
      


<ul className="flex flex-col items-center gap-4 mt-2 md:mb-36 lg:mb-23">
  {navLinks.slice(5, 8).map((link, index) => (
    <li key={index} className="text-white cursor-pointer">
      <div
        className="tooltip tooltip-right"
        data-tip={link.title} // Tooltip text
      >
        <NavLink to={link.path} className="relative">
          {link.icon}
        </NavLink>
      </div>
    </li>
  ))}
</ul>




    </div>
  );
};

export default Navlinks;
