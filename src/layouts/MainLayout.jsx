import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/navbar/Navber";
import Dashbors from "../components/dashbord/Dashbors";
import Footer from "../components/Footer/Footer";
 
const MainLayout = () => {
  const current = useLocation();
  console.log(current);

  return (
  
    <div className="h-screen flex flex-col">
  <Navber />

  <div className="flex-grow   overflow-auto">
    <div className="ml-3 hidden md:hidden">
      <Outlet />
    </div>
    <div className="md:block">
      <Dashbors />
    </div>
  </div>

  <Footer />
</div>

   

  );
};

export default MainLayout;
