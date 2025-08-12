import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import About from "../components/About/About";
import Skill from "../components/skill/Skill";
import Project from "../components/project/Project";
import Introduction from "../components/introduction/Introduction";
import Contact from "../components/contact/Contact";
import Card from "../components/card/Card";
import Myblog from "../components/myBlog/Myblog";
import FeedBack from "../components/feedBack/FeedBack";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // {
      //   path: "/tabss",
      //   element: <TabsComponent></TabsComponent>,
      // },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/myblog",
        element: <Myblog></Myblog>,
      },
      {
        path: "/introduction",
        element: <Introduction></Introduction>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/projects",
        element: <Project></Project>,
      },
      {
        path: "/feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/card",
        element: <Card></Card>,
      },
    ],
  },
  // {
  //   path: "/dashbors",
  //   element: <Dashbors />,
  //   children: [

  //      {
  //       path: "about",
  //       element: <About></About>,
  //     },
  //   ],
  // },
]);
