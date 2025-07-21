import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../components/home/Home";
import Dashbors from "../components/dashbord/Dashbors";
import Tabss from "../components/tabcomponant/TabsComponent";
import About from "../components/About/About";
import Skill from "../components/About/Skill";
import TabsComponent from "../components/tabcomponant/TabsComponent";
import Project from "../components/About/Project";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tabss",
        element: <TabsComponent></TabsComponent>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/projects",
        element: <Project></Project>,
      },
    ],
  },
  {
    path: "/dashbors",
    element: <Dashbors />,
    children: [
      //     // {
      //     //     path:"Navigation",
      //     //     element:<Navigation></Navigation>
      //     // },
      //     // {
      //     //     path:"Navbar",
      //     //     element:<Navbar></Navbar>
      // },
    ],
  },
  //  {
  //   path: "/FileNavber",
  //   element: <FileNavber/>,
  //   children:[
  //
  //     {
  //       path:"Abbounmens",
  //       element:<Abbounmens></Abbounmens>
  //     },

  //   ]
  // },
]);
