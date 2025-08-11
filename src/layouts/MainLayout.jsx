import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/navbar/Navber";
import Dashbors from "../components/dashbord/Dashbors";
import Footer from "../components/Footer/Footer";
import TabsComponent from "../components/tabcomponant/TabsComponent";

const MainLayout = () => {
  const current = useLocation();
  console.log(current);

  return (
    <div className="h-screen flex flex-col">
      <Navber />
      <div className="md:hidden">
        <TabsComponent></TabsComponent>
      </div>
      <div className="flex-grow   md:block  overflow-auto">
        <div className="ml-3  md:hidden">
          <Outlet />
        </div>

        <div className="md:block hidden">
          <Dashbors />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
