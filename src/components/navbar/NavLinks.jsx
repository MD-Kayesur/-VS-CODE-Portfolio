import { Link } from "react-router-dom";

const NavLinks = ({ navbarLinks, mode, onLinkClick }) => {
  return (
    <ul className={`flex flex-col ${mode === "desktop" ? "lg:flex-row" : ""}`}>
      {navbarLinks.map(({ link, linkTitle }) => (
        <li key={link} className="my-1 lg:my-0   inline-block m-auto lg:mx-2">
          <Link
            to={link}
            onClick={onLinkClick} // ✅ Trigger callback to close mobile menu
            className="text-gray-700 p-2 md:w-full btn btn-xs ">
            {linkTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
