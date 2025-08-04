 



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
    <div className="min-h-screen bg-[#1a1d52] text-white px-8 py-12 flex items-center flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 animated-gradient ">Skills</h2>
        <p className="text-sm mb-4">
  I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
  I have hands-on experience with REST APIs, state management (Redux, Context API), authentication systems (JWT, Firebase), and deploying projects to platforms like Vercel and Render.
</p>

         
      </div>

      <div className="md:w-1/2 w-full space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded">
              <div
                className={`${skill.color} hover:${skill.color} h-3 rounded`}
                style={{ width: `${skill.level}%` }}
              >

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}