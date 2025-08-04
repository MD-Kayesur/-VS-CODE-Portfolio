/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
 darkMode: "class",
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

daisyui: {
  themes: [
    "light",
    "dark",
    "cupcake",
    "synthwave",
    {
      myCustomTheme: {
        "base-content": "#f1f5f9",
        // add other custom colors here if needed
      }
    },
    "dracula"
  ]
}

};
