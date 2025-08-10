import React from "react";
import { motion } from "framer-motion";
import { AboutData } from "./AboutData";
import "./AnimatedBorder.css";
import CodeWrapper from "../CodeWrapper";
const About = () => {
  return (
 
    <div className=" pl-5  bg-[#1a1d52]   pr-5   pb-36  ">
<div className="  mt-10  flex justify-center "> <h1 className="text-5xl font-bold  text-white">About me</h1></div>

      <div className="grid lg:grid-cols-3 mt-10 gap-6">
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
              <p className="text-white text-xl">{data.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
      </div>
    </div>
     
  );
};

export default About;
