import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiChakraui,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaNodeJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiDatabricks,
  SiJsonwebtokens,
  SiPrisma,
} from "react-icons/si";
export default function Skill() {
 const skills = [
  { title: "HTML", icon: <FaHtml5 /> },
  { title: "CSS", icon: <FaCss3Alt /> },
  { title: "Bootstrap", icon: <FaBootstrap /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  { title: "Chakra UI", icon: <SiChakraui /> },
  { title: "JavaScript", icon: <FaJs /> },
  { title: "React", icon: <FaReact /> },
  { title: "Next.js", icon: <SiNextdotjs /> },
];

const backendSkills = [
  { title: "Node.js", icon: <FaNodeJs /> },
  { title: "Express.js", icon: <SiExpress /> },
  { title: "MongoDB", icon: <SiMongodb /> },
  { title: "Mongoose", icon: <SiMongoose /> },
  { title: "NoSQL", icon: <SiDatabricks /> }, // NoSQL এর জন্য generic icon
  { title: "Firebase", icon: <SiFirebase /> }, // optional auth/backend service
  { title: "JWT", icon: <SiJsonwebtokens /> }, // for authentication
  { title: "Prisma", icon: <SiPrisma /> }, // ORM alternative to Mongoose
];
  return (
    <div className="min-h-fit bg-[#1a1d52] text-white px-8 py-12  flex flex-col justify-between items-center   gap-8">
      <div className="md:w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 animated-gradient ">Front end</h2>
        <p className="text-sm mb-4">
          I specialize in building full-stack web applications using the MERN
          stack (MongoDB, Express.js, React.js, Node.js). I have hands-on
          experience with REST APIs, state management (Redux, Context API),
          authentication systems (JWT, Firebase), and deploying projects to
          platforms like Vercel and Render.
        </p>

        <Marquee
        speed={40}
        pauseOnHover={true}
        gradient={false}
        direction="left"
        className="overflow-hidden"
      >
      <div className="flex justify-center flex-wrap gap-x-15 gap-y-6">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center hover:scale-110 justify-center w-24"
    >
      <div className="text-4xl mb-2">{skill.icon}</div>
      <p className="text-sm text-center">{skill.title}</p>
    </div>
  ))}
</div>


      </Marquee>
      </div>
      <div className="md:w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 animated-gradient ">Back end</h2>
        <p className="text-sm mb-4">
          I specialize in building full-stack web applications using the MERN
          stack (MongoDB, Express.js, React.js, Node.js). I have hands-on
          experience with REST APIs, state management (Redux, Context API),
          authentication systems (JWT, Firebase), and deploying projects to
          platforms like Vercel and Render.
        </p>

        <Marquee
        speed={40}
        pauseOnHover={true}
        gradient={false}
        direction="right"
        className="overflow-hidden"
      >
      <div className="flex justify-center flex-wrap gap-x-14 gap-y-6">
  {backendSkills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center hover:scale-110 justify-center w-24"
    >
      <div className="text-4xl mb-2">{skill.icon}</div>
      <p className="text-sm text-center">{skill.title}</p>
    </div>
  ))}
</div>

      </Marquee>
      </div>
    </div>
  );
}
