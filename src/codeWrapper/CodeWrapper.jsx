import React from "react";

const CodeWrapper = ({ children, lines }) => {
  return (
    <div className="flex    text-white font-mono pr-5  rounded-lg shadow-md overflow-auto">
      {/* Line numbers */}
      <div className="text-right  text-gray-500 select-none">
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="h-6">{i + 1}</div>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 whitespace-pre-wrap">{children}</div>
    </div>
  );
};

export default CodeWrapper;
