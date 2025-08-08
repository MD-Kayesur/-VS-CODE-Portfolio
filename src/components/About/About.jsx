import React from "react";
import { motion } from "framer-motion";
import { AboutData } from "./AboutData";
import "./AnimatedBorder.css";
const About = () => {
  return (
    <div className=" grid lg:grid-cols-2  gap-6  p-10  bg-[#1a1d52]  pt-27 lg:pt-0    justify-center ">

<div className="    flex justify-center "> <h1 className="text-5xl font-bold  text-white">About me</h1></div>

      {AboutData.map((data, index) => (
        
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="animated-border "
           >
          <div className="bg-[#1a1d52] rounded-2xl relative z-10 p-1">
            <img
              src={data.image}
              alt={data.description}
              className="w-20  object-cover"
            />
            <div className="p-4">
              <p className="text-white text-sm">{data.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
