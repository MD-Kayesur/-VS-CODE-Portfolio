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
import Font from "react-font";

export default function Contact() {
  const lines = [
    "/**",
    " * WhatsApp: +880 19263-60430",
    " * GitHub: https://github.com/MD-Kayesur",
    " * LinkedIn: https://www.linkedin.com/in/md-kayesur-rahman-212759317",
    " * Facebook: https://www.facebook.com/md.kayesur.5",
    " * Instagram: https://www.instagram.com/crazy_boy_kayes",
    "*/",
  ];

  const getIcon = (line) => {
    if (line.includes("WhatsApp"))
      return (
        <a href="https://www.whatsapp.com/download/">
          <FaWhatsapp className="inline mr-2 text-5xl text-green-500" />
        </a>
      );
    if (line.includes("GitHub"))
      return (
        <a href="https://github.com/MD-Kayesur">
          <FaGithub className="inline mr-2  text-5xl text-white" />
        </a>
      );
    if (line.includes("LinkedIn"))
      return (
        <a href="https://www.linkedin.com/in/md-kayesur-rahman-212759317">
          <FaLinkedin className="inline text-5xl mr-2 text-blue-400" />
        </a>
      );
    if (line.includes("Facebook"))
      return (
        <a href="https://www.facebook.com/md.kayesur.5">
          <FaFacebook className="inline text-5xl mr-2 text-blue-600" />
        </a>
      );
    if (line.includes("Instagram"))
      return (
        <a href="https://www.instagram.com/crazy_boy_kayes">
          <FaInstagram className="inline text-5xl mr-2 text-pink-400" />
        </a>
      );
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    console.log(email);
    return Swal.fire({
      title: "Good job!",
      text: "Thank You so much for massager me ",
      icon: "success",
    });
  };

  return (
    <div>
      <CodeWrapper lines={36}>
        <div className=" min-h-screen   bg-[#1a1d52] pt-20 pl-6 text-white font-mono  rounded-md     ">
          <div className="flex justify-center items-center text-5xl font-bold">
            <Font family="Agbalumo ">
              <h1 font-Agbalumo className="space-x-2 text-green-400 ">
                {" "}
                <span>/****** </span> Contact with me <span> ******/</span>{" "}
              </h1>
            </Font>
          </div>

          <div className="   rounded-md font-mono text-sm">
            {lines.map((line, index) => (
              <div key={index} className="  gap-4 ">
                <span className="text-green-400  ">
                  {line.includes(":") ? (
                    <>
                      <div className="text-xl  mt-5 flex items-center">
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
              <span className="text-blue-400">const</span> handleContact = [{" "}
              <br />
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
                      placeholder="Contact number"
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
                      rows={6}
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
