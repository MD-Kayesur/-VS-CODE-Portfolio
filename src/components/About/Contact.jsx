import {
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import React from "react";
import Swal from "sweetalert2";
import CodeWrapper from "../CodeWrapper";

export default function Contact() {
  const lines = [
    "/*",
    " * Contact Information:",
    " * Phone: +880 19263-60430",
    " * WhatsApp: +880 19263-60430",
    " * GitHub: github.com/KareemEhab",
    " * LinkedIn: linkedin.com/in/kareem-hamouda",
    " * Facebook: facebook.com/kareem.ehab.37",
    " * Instagram: instagram.com/kareem.ehabz",
    "*/",
  ];

  const getIcon = (line) => {
    if (line.includes("Phone"))
      return <FaPhone className="inline mr-2 text-yellow-400" />;
    if (line.includes("WhatsApp"))
      return <FaWhatsapp className="inline mr-2 text-green-500" />;
    if (line.includes("GitHub"))
      return <FaGithub className="inline mr-2   text-white" />;
    if (line.includes("LinkedIn"))
      return <FaLinkedin className="inline mr-2 text-blue-400" />;
    if (line.includes("Facebook"))
      return <FaFacebook className="inline mr-2 text-blue-600" />;
    if (line.includes("Instagram"))
      return <FaInstagram className="inline mr-2 text-pink-400" />;
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    console.log(email);
    return Swal.fire({
      title: "Good job!",
      text: "Thank You so much",
      icon: "success",
    });
  };

  return (
    <div>
      <CodeWrapper lines={30}>
        <div className=" min-h-screen bg-gray-900 text-white font-mono p-6 rounded-md w-full max-w-full mx-auto">
          <div className="   rounded-md font-mono text-sm">
            {lines.map((line, index) => (
              <div key={index} className="flex">
                <span className="text-green-400  ">
                  {line.includes(":") ? (
                    <>
                      <div className="text-xl mt-1 flex items-center">
                        {" * "}
                        {getIcon(line)}
                        {line.split(":")[0].trim()}:{" "}
                        {line.split(":").slice(1).join(":").trim()}
                      </div>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="  mx-auto mt-15">
            <span className="text-cyan-400">
              <span className="text-blue-400">const</span> handleContact =() =
              {">"} [ <br />
            
              <form className="ml-4" action="" onSubmit={handleSubmit}>
                 <span> {"{"}</span>
                <div className="flex">
                  <span>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-cyan-400">name</span> = "
                    <input
                      type="text"
                      placeholder="Your name"
                      className="bg-transparent pl-3 border-none focus:outline-none text-white"
                    />
                    "
                  </span>
                </div>
                {"}"} , <br />
                {"{"}
                <div className="flex">
                  <span>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-cyan-400">email</span> = "
                    <input
                      // type="email"
                      name="email"
                      placeholder="example@gmail.com "
                      className="bg-transparent border-none pl-3 focus:outline-none text-white"
                    />
                    "
                  </span>
                </div>
                {"}"} , <br />
                {"{"}
                <div className="flex">
                  <span>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-cyan-400"> Number</span> = "
                    <input
                      type="text"
                      placeholder=" +880 number"
                      className="bg-transparent border-none pl-3 focus:outline-none text-white"
                    />
                    "
                  </span>
                </div>
                {"}"} , <br />
                {"{"}


                <div className="flex items-start">
                  <span className="flex gap-3 items-start">
                    <span className="text-blue-400 flex items-center">
                      const
                    </span>{" "}
                    <span className="flex items-center gap-1">
                      <span className="text-cyan-400">message</span>
                      <span>=</span>
                      <span className="pl-2">" </span>
                    </span>
                    <br />
                    <textarea
                      rows={2}
                      placeholder="Your message here..."
                      name="massage"
                      cols={30}
                      className="bg-transparent border-none -ml-3   focus:outline-none text-white w-full"></textarea>
                    <span className="-mt-5"> "</span>
                  </span>
                </div>
                {"}"} ]
                <div className="flex mt-4">
                  <button type="submit" className="btn btn-accent">
                    Contact
                  </button>
                </div>
              </form>
            </span>
          </div>
        </div>
      </CodeWrapper>
    </div>
  );
}
