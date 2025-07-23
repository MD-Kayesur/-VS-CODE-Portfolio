import About from "../../components/About/About";
import Introduction from "../../components/About/Introduction";

export const tabs = [
  {
    tabTitle: "About",
    tabContent: <About />,
    path: "/about",
  },
  {
    tabTitle: "Skill",
    tabContent: (
      <p>  skill enim hic dignissimos nobis quasi ex? </p>
    ),
    path: "/skill",
  },
  {
    tabTitle: "Project",
    tabContent: (
      <p>  project enim hic dignissimos nobis quasi ex? </p>
    ),
    path: "/projects",
  },
  {
    tabTitle: "Introduction",
    tabContent: (
       <Introduction></Introduction>
    ),
    path: "/introduction",
  },
];
