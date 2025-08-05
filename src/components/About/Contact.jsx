 


 
 import React from "react";

export default function Contact() {
  const lines = [
    '/*',
    ' * Contact Information:',
    ' * 📞 Phone: +20 115 111 9085',
    ' * 💬 WhatsApp: +20 115 111 9085',
    ' * 🐙 GitHub: github.com/KareemEhab',
    ' * 💼 LinkedIn: linkedin.com/in/kareem-hamouda',
    ' * 📘 Facebook: facebook.com/kareem.ehab.37',
    ' * 📸 Instagram: instagram.com/kareem.ehabz',
    '*/',
  ];

  return (
    <div className="bg-gray-900 text-white font-mono p-6 rounded-md w-full max-w-full mx-auto">
      {/* Green comment block with line numbers */}
      {lines.map((line, index) => (
        <div key={index} className="flex">
          <span className="w-8 text-gray-500 text-right pr-4 select-none">
            {index + 1}
          </span>
          <span className="text-green-400">{line}</span>
        </div>
      ))}

      {/* Form Inputs Styled As Code */}
      <div className="flex">
        <span className="w-8 text-gray-500 text-right pr-4 select-none">10</span>
        <span>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-cyan-400">name</span> = "
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border-none focus:outline-none text-white"
          />"
        </span>
      </div>

      <div className="flex">
        <span className="w-8 text-gray-500 text-right pr-4 select-none">11</span>
        <span>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-cyan-400">email</span> = "
          <input
            type="email"
            placeholder="your.email@example.com"
            className="bg-transparent border-none focus:outline-none text-white"
          />"
        </span>
      </div>

      <div className="flex">
        <span className="w-8 text-gray-500 text-right pr-4 select-none">12</span>
        <span>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-cyan-400">subject</span> = "
          <input
            type="text"
            placeholder="Message subject"
            className="bg-transparent border-none focus:outline-none text-white"
          />"
        </span>
      </div>

      <div className="flex items-start">
        <span className="w-8 text-gray-500 text-right pr-4 select-none">13</span>
        <span>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-cyan-400">message</span> = "<br />
          <textarea
            rows={2}
            placeholder="Your message here..."
            className="bg-transparent border-none focus:outline-none text-white w-full"
          ></textarea>
          "
        </span>
      </div>

      {/* Button */}
      <div className="flex mt-4">
        <span className="w-8 text-gray-500 text-right pr-4 select-none">14</span>
        <button className="btn btn-accent">Send Message</button>
      </div>
    </div>
  );
}



 
