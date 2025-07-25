import { Link } from "react-router-dom";

const NavLinks = ({ navbarLinks, mode = "desktop" }) => {
  const isMobile = mode === "mobile";

  return (
    <div
      className={isMobile ? "lg:hidden" : "navbar hidden lg:flex -ml-20"}
    >
      <ul
        className={`menu ${
          isMobile
            ? "menu-vertical px-2 py-2 bg-gray-100 rounded shadow w-full"
            : "menu-horizontal px-1"
        }`}
      >
        {navbarLinks.map((link, index) => (
          <li key={index} className="mx-2">
            <Link
              to={link.link}
              className="btn btn-outline border-none btn-xs m-1 w-full"
            >
              {link.linkTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
