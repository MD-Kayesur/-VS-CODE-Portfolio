import Marquee from "react-fast-marquee";

import Font, { Text } from "react-font";


import CodeWrapper from "../../codeWrapper/CodeWrapper";
import { backendSkills, frontskills } from "./SkillData";
export default function Skill() {
  

  
  return (
    <div>
     
        <div className="  bg-[#1a1d52] text-white px-8    pt-15 md:pt-10   gap-10  flex flex-col  items-center    ">
          <div className="md:w-11/12 mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 animated-gradient ">
              Front end
            </h2>
           

            <Marquee
              speed={40}
              pauseOnHover={true}
              gradient={false}
              direction="left"
              className="overflow-hidden">
              <div className="flex justify-center mt-10 flex-wrap gap-x-15 gap-y-6">
                {frontskills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center hover:scale-110 justify-center  w-24">
                    <div className="text-7xl   mb-2">{skill.icon}</div>
                    <p className="text-lg text-center">{skill.title}</p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="md:w-11/12 mx-auto text-center">
            <Font family="Agbalumo">
              <h2 className="text-4xl font-bold mb-4 animated-gradient ">
                Back end
              </h2>
            </Font>

            

            <Marquee
              speed={40}
              pauseOnHover={true}
              gradient={false}
              direction="right"
              className="overflow-hidden">
              <div className="flex justify-center mt-10 flex-wrap gap-x-14 gap-y-6">
                {backendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center hover:scale-110 justify-center w-24">
                    <div className="text-7xl mb-2">{skill.icon}</div>
                    <p className="text-lg text-center">{skill.title}</p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
    
    </div>
  );
}
