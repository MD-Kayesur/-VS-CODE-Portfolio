import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // প্রথমে শুধু মাউন্টের সময় লোকালস্টোরেজ থেকে থিম পড়বেন
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}, []);

// আর যখন থিম পরিবর্তিত হবে তখন থিম সেট করবেন html এ এবং লোকালস্টোরেজে
useEffect(() => {
  document.querySelector("html").setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="p-4">
      <button className="btn btn-sm btn-primary" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ThemeToggle;
