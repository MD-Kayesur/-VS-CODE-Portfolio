 import Marquee from "react-fast-marquee";
import { FaJs } from "react-icons/fa";



export default function Skill() {
     const skills = [
  { name: "Html", level: 90, color: "bg-green-500" },
  { name: "Css", level: 85, color: "bg-yellow-400" },
  { name: "JS", level: 70, color: "bg-cyan-400" },
  { name: "React", level: 75, color: "bg-red-500" },
  { name: "Next.Js", level: 60, color: "bg-indigo-500" },
  { name: "Node.js", level: 40, color: "bg-orange-500" },
  { name: "Express.js", level: 70, color: "bg-violet-500" },
  { name: "MongoDB", level: 50, color: "bg-fuchsia-500" },
];
  return (
    <div className="min-h-screen bg-[#1a1d52] text-white px-8 py-12   items-center   gap-8">
      <div className="md:w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 animated-gradient ">Skills</h2>
        <p className="text-sm mb-4">
  I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
  I have hands-on experience with REST APIs, state management (Redux, Context API), authentication systems (JWT, Firebase), and deploying projects to platforms like Vercel and Render.
</p>

         
      </div>
    
      <Marquee
        direction="right"
        speed={  50}
        gradient={false}
        pauseOnHover  // খুবই গুরুত্বপূর্ণ: যাতে scroll বন্ধ না হয়
      >
        <div className="flex gap-24 justify-between">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <FaJs className="text-3xl mb-1" />
              <div className="font-medium">{skill.name}</div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  



  
 


     
  );
}