import { NavLink } from "react-router-dom";
import { navLinks } from "./Iconlink.data";
// Navlinks using in dashbord
const Navlinks = () => {
  return (
    <div className="md:w-10 pl-3 md:ml-3 lg:pt-5 md:pt-15 md:pr-5 lg:overflow-hidden md:overflow-y-auto border-r-1 border-white h-screen flex flex-col items-center lg:justify-between justify-between">
      {/* Top icons */}
      <ul className="flex flex-col items-center  lg:gap-8 md:gap-4 ">
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
