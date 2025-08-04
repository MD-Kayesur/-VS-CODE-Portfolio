import React from "react";
import myImage from "../../assets/imgs/1749660883197-removebg-preview.png"; // Your image path
import ThemeToggle from "../../togglethem/ThemeToggle";
  const About = () => {
  return (
    <div     className="min-h-screen  text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="relative">
          {/* Decorative circle shapes (optional) */}
          <div className="absolute w-60 h-60 bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full -left-10 -top-10 z-0 blur-lg"></div>
          <img
            src={myImage}
            alt="About me"
            className="w-[250px] md:w-[500px] z-10 relative rounded-xl object-cover shadow-lg"
          />
        </div>




        {/* Right Text Section */}
        <div>
          <div className=" grid md:grid-cols-3 gap-3  pb-7">
            <div> <h2 className="text-3xl font-bold">Birth Date</h2>
            <h2 className="text-xl">20 December 2002</h2></div>
 
            <div> <h2 className="text-3xl font-bold">Nationality</h2>
            <h2 className="text-xl">Bangladesh</h2></div>
 
            <div> <h2 className="text-3xl font-bold">Location</h2>
            <h2 className="text-xl bg-base-100">Dhaka City ,Bangladesh</h2></div>
 
          </div>
        <div className="text-left z-10">
          <h2 className="text-4xl font-bold mb-6 animated-gradient ">About Me</h2>
          <p className="text-white mt-3 leading-relaxed">
    Currently looking for a position in the <span className="font-bold text-yellow-400">IT industry</span> where I can apply my knowledge, learn from real-world experience, and grow as a developer. I'm also continuously learning modern frameworks and tools like 
    <span className="font-medium"> React.js, Next.js, Firebase, Git, MongoDB, Express.js, Node.js etc</span>.
  </p>
           
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
