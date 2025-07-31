import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/navbar/Navber";
import Dashbors from "../components/dashbord/Dashbors";
import Contact from "../components/About/Contact";

const MainLayout = () => {
   
  const current = useLocation();
  console.log(current);

  return (
    <div>
      <Navber />

      <div >
        <div className="ml-3 md:hidden">
   <Outlet />
</div>
        <div className="hidden md:block">
          {" "}
          <Dashbors></Dashbors>
        </div>
       
      </div>
  
    </div>
  );
};

export default MainLayout;
