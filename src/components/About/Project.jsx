import CodeWrapper from "../CodeWrapper";

 
const projects = [
  {
    title: "Building-Manegment",
    img: "https://i.ibb.co.com/5gD06jKS/screencapture-building-manegment-web-app-2025-04-16-00-55-03.png",
    description:
      "A full-stack e-commerce platform with user login, cart, and admin dashboard.",
    tech: [
      "HTML",
      "Tailwind CSS",
      "js",
      "React",
      "Firebase Authentication",
      "express.js",
      "MongoDB",
      "Node.Js",
    ],
    live: "https://building-manegment.web.app/",
    clientcode: "https://github.com/MD-Kayesur/-Game_Spot_Client",
    servercode:
      "https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-MD-Kayesur",
  },
  {
    title: "Car-Swift",
    img: "https://i.ibb.co.com/BHB5Sk33/screencapture-car.png",
    description:
      "Rainbows are a beautiful reminder that even after the darkest storms, light finds a way to bend, break through, and paint the sky with color.",
    tech: [
      "HTML",
      "Tailwind CSS",
      "js",
      "React",
      "Firebase Authentication",
      "express.js",
      "MongoDB",
      "Node.Js",
    ],
    live: "https://car-swift.web.app",
    clientcode: "https://github.com/MD-Kayesur/CAR_SWIFT_CLIENT",
    servercode: "https://github.com/MD-Kayesur/CAR_SWIFT_SERVER",
  },
 
  {
    title: "Rainbow",
    img: "https://i.ibb.co.com/Kj1JcFzj/rainbow.png",
    description:
      "Rainbows are a beautiful reminder that even after the darkest storms, light finds a way to bend, break through, and paint the sky with color.",
    tech: ["HTML", "Tailwind CSS", "js", "React"],
    live: "https://rainbowside.netlify.app/",
    clientcode: "https://github.com/MD-Kayesur/Rainbow_Client",
  },
  {
    title: "Game_Spot",
    img: "https://i.ibb.co/j98RJryT/gamespot.png",
    description:
      "Game_Spot is a dynamic and engaging platform dedicated to all things related to video games. Whether you’re a casual gamer or a hardcore enthusiast, Game_Spot offers a wide variety of content tailored to meet your gaming interests.",
    tech: [
      "HTML",
      "Tailwind CSS",
      "js",
      "React",
      "Firebase Authentication",
      "express.js",
      "MongoDB",
      "Node.Js",
    ],
    live: "https://game-spot-251f8.web.app/",
    clientcode: "https://github.com/MD-Kayesur/-Game_Spot_Client",
    servercode: "https://github.com/MD-Kayesur/Game_Spot_Server",
  },
];

const Project = () => {
  return (

    <div>
<CodeWrapper lines={70}>
   
    <section id="case-study" className="py-16 bg-[#0D1A43] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 animated-gradient ">
          My Latest Projects
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div className="flex flex-col md:flex-row bg-[#13254e] rounded-2xl shadow-lg p-6 gap-6 hover:shadow-cyan-500 transition-all">
              {/* Image Section */}
              <div className="md:w-1/2 w-full overflow-hidden">
                <img
                  src={project.img}
                  alt="img"
                  className="w-full h-[300px] rounded-xl object-cover max-w-full"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <ul className="list-disc list-inside   flex flex-wrap text-sm mb-4 text-cyan-300">
                  {project.tech.map((tech, i) => (
                    <li className="mr-5" key={i}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-[#13254e] transition">
                    Live Demo
                  </a>
                  <a
                    href={project.clientcode}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-[#13254e] transition">
                    Client Code
                  </a>
                  <a
                    href={project.servercode}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-[#13254e] transition">
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </CodeWrapper>
     </div>
  );
};

export default Project;
