// src/components/Introduction.jsx

import React, { useEffect, useRef } from "react";
import { motion, easeInOut } from "framer-motion";
import profilePic from "../../assets/imgs/1749660883197-removebg-preview.png"; // Replace with your actual image
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Typed from "typed.js";
import Font from "react-font";
import CodeWrapper from "../../codeWrapper/CodeWrapper";
import FluidCursor from "../../animation/FluidCursor";

const Introduction = () => {
  const el = useRef(null); // reference to the span element
  const typed = useRef(null); // reference to Typed instance

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["FRONTEND DEVELOPER", "MERN-STACK DEVELOPER"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
       typed.current.destroy();
    };
  }, []);

  return (
    <div>

      <div className="h-screen pt-20  pl-3  flex  pb-10  justify-center   overflow-y-auto">
        <div className="text-white   w-full flex flex-col lg:flex-row items-start   gap-14">
           <div className="space-y-4">
            <div className="flex flex-col">
              <h1 className="text-6xl md:text-5xl font-bold">
                <span className=" md:text-6xl text-5xl text-yellow-400">
                  MD.
                </span>{" "}
                <br />
              </h1>
              <motion.h1
                animate={{ x: [0, 50, 0] }}
                transition={{
                  duration: 2,
                  delay: 1,
                  ease: easeInOut,
                  repeat: Infinity,
                }}
                className="md:text-7xl text-4xl font-bold">
                {" "}
                <motion.span
                  animate={{ color: ["#FF5733", "#33FF3C", "#333CFF"] }}
                  transition={{ duration: 5, delay: 1, repeat: Infinity }}>
                  <Font family="Agbalumo">
                    <h2 className="text-7xl font-bold mb-4 animated-gradient ">
                      KAYESUR
                    </h2>
                  </Font>
                </motion.span>{" "}
              </motion.h1>
            </div>

            <p className=" lg:w-[700px]  ">
              Front-End Developer crafting high-performance, responsive, and
              user-friendly web applications using modern technologies, clean
              code, and best practices for seamless user experiences.
            </p>
            <h2 className="text-xl text-tomato-400 font-bold ">
              I AM <span className="text-2xl" ref={el}></span>
            </h2>
            <div className="flex items-center gap-3">
              <a
                href="../../public/MDkayesurResume.pdf"
                download="My_Resume.pdf"
                className="">
                <button className="btn btn-info"> Download CV</button>
              </a>
              <a
                href="../../../public/MDkayesurResume & CV.pdf"
                download="My_Resume.pdf"
                className="">
                <button className="btn btn-info"> Cover Later</button>
              </a>

              
            </div>
          </div>

          <div className="  flex items-center justify-center ">
            <div className="relative w-64 h-64 flex items-center justify-center  ">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute w-full h-full rounded-full p-2
                     bg-[conic-gradient(from_0deg,green,red,blue,green)]">
                <div className="w-full h-full bg-black rounded-full"></div>
              </motion.div>

              <img
                src={profilePic}
                alt="Profile"
                className="w-60 mx-auto bg-base-300 h-60 bg-cover rounded-full object-cover z-10 absolute"
              />
            </div>
          </div>
        </div>
      </div>

    


    </div>
  );
};

export default Introduction;
