import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/navbar/Navber";
import Dashbors from "../components/dashbord/Dashbors";
import Footer from "../components/Footer/Footer";
import TabsComponent from "../components/tabcomponant/TabsComponent";

const MainLayout = () => {
  

  return (
    <div className="mainlayout-text flex flex-col h-screen    ">
 <div className="md:hidden">  <Navber /></div>

  {/* Scrollable Content */}
  <main className="flex-grow  overflow-auto">
    <div className="md:hidden md:pt-30">
      <TabsComponent />
    </div>

    <div className="ml-3  hidden md:hidden">
      <Outlet />
    </div>

    <div className="md:block  hidden">
      <Dashbors />
    </div>
  </main>

   <div className="md:hidden">  <Footer /> </div>
</div>
  );
};

export default MainLayout;
