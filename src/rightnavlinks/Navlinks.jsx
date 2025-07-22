import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/data/Iconlink.data";
 
const Navlinks = () => {
  return (
    <div className="w-10 hidden  pl-4 lg:block bg-black">
      <ul className="flex  flex-col items-center justify-between h-full py-6">
        {/* Main Nav Links */}
        {/* <div>
          {navLinks.slice(0, 5).map((link, index) => (
            <li className="text-white mt-6" key={index}>
              <NavLink to={link.path}>{link.icon}</NavLink>
            </li>
          ))}
        </div> */}

        {/* Bottom Dropdowns */}
        <div className="flex flex-col items-center gap-3 mb-9">
          {navLinks.map((link, index) => (
            <li className="text-white cursor-pointer mt-6" key={index}>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <div className="w-10">{link.icon}</div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black rounded-box z-1 w-38 -top-9 left-9  shadow"
                >
                  {link.dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <a>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Navlinks;
