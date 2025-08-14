import CodeWrapper from "../../codeWrapper/CodeWrapper";
import { projects } from "./ProjectsData";

const Project = () => {
  return (
    <div>
      <section id="case-study" className="py-32    ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 animated-gradient ">
            My Latest Projects
          </h2>

          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <div className="flex flex-col md:flex-row   rounded-2xl shadow-lg p-6 gap-6 hover:shadow-cyan-500 transition-all">
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
                  <h3 className="text-2xl font-semibold mb-2  ">
                    {project.title}
                  </h3>
                  <p className="  text-sm mb-4">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside   flex flex-wrap text-sm mb-4  ">
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
    </div>
  );
};

export default Project;
