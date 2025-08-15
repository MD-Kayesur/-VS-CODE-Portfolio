import React from "react";
import { GiPrettyFangs } from "react-icons/gi";
import { IoIosGitBranch } from "react-icons/io";
import { SiPrettier, SiJson } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
const Footer = () => {
  return (
    <div>
      <footer className="footer h-10  border-t-1 flex justify-between border-white sm:footer-horizontal z-150  text-neutral-content items-center p-4">
        <aside className="flex md:gap-10 md:pl-10">
          <IoIosGitBranch className="text-xl" color="#F1502F" />{" "}
           <VscJson className="text-xl" color="#CB3837" />
        </aside>
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col md:gap-10 md:pr-10 md:place-self-center md:justify-self-end">
          <GiPrettyFangs className="text-xl" color="#FF0000" />
          <SiPrettier className="text-xl" color="#9C27B0" />
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
