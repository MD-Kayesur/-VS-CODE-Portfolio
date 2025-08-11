import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/data/Iconlink.data";
// Navlinks using in dashbord
const Navlinks = () => {
  return (
    <div className="md:w-10  mx-auto  ml-3 md:ml-5  border-r-2 border-white   ">
      <ul className="flex  flex-col items-center gap-28 h-full  ">
        <div className="flex flex-col justify-between items-center gap-3  ">
        <div>
            {navLinks.slice(0,5).map((link, index) => (
            <li className="text-white cursor-pointer mt-10" key={index}>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <div className="  mx-auto">{link.icon}</div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black rounded-box z-1 w-38 -top-9 left-9  shadow">
                  {link.dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <NavLink to={link.path} >{item.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </div>
       
        </div>
        <div className="flex flex-col justify-between items-center gap-3  ">
        <div>
            {navLinks.slice(5,8).map((link, index) => (
            <li className="text-white cursor-pointer mt-10" key={index}>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <div className="  mx-auto">{link.icon}</div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black rounded-box z-1 w-38   left-9  shadow">
                  {link.dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <NavLink to={link.path} >{item.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </div>
       
        </div>
      </ul>
    </div>
  );
};

export default Navlinks;
