import About from "../../components/About/About";

export const tabs = [
  {
    tabTitle: "About",
    tabContent: <About />,
    path: "/about",
  },
  {
    tabTitle: "Skill",
    tabContent: (
      <p>
        skill enim hic dignissimos nobis quasi ex? Atque dolor, eaque neque
        magnam vero accusamus ducimus dicta at,projects cupiditate consequuntur
        odit aperiam provident. Lorem, ipsum dol o ipsum dolor sit amet
        consectetur adipisicing eli maxime alias non.
      </p>
    ),
    path: "/skill",
  },
  {
    tabTitle: "Project",
    tabContent: (
      <p>
        projects cupiditate consequuntur odit aperiam provident. Lor em, ipsum
        dolor sit amet consectetur adipisicing elit. Itaque vero
        molestiaeprojects cupiditate consequuntur odit ape minus, provident
        delectus unde! Aliquam debitis officia culpa molestiae
      </p>
    ),
    path: "/projects",
  },
];
