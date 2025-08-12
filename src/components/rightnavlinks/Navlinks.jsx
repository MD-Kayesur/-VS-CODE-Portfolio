import { NavLink } from "react-router-dom";
import { navLinks } from "./Iconlink.data";
// Navlinks using in dashbord
const Navlinks = () => {
  return (
    <div className="md:w-10  mx-auto  ml-3 md:ml-5 md:pr-5  border-r-2 border-white   ">
      <ul className="flex  flex-col items-center gap-28 h-full  ">
        <div className="flex flex-col justify-between items-center gap-3  ">
          <div>
            {navLinks.slice(0, 5).map((link, index) => (
              <li className="text-white cursor-pointer mt-10" key={index}>
                <div tabIndex={0} role="button">
                  <div className="  mx-auto">
                    <NavLink to={link.path}>{link.icon}</NavLink>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-3  ">
          <div>
            {navLinks.slice(5, 8).map((link, index) => (
              <li className="text-white cursor-pointer mt-10" key={index}>
               
                  <div tabIndex={0} role="button">
                    <div className="  mx-auto">
                    <NavLink to={link.path}>
                        {link.icon}
                    </NavLink>
                      </div>
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
