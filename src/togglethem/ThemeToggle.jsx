import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="p-4">
      <button className="btn btn-primary" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ThemeToggle;
