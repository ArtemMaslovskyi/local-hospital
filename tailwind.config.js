/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/index.js",
    "./src/App.js",
    "./src/Header.js",
    "./src/hospital.js",
    "./src/doctors.js",
    "./src/DoctorCards.js",
    "./src/Contact.js",
    "./src/Veterans.js",
    "./src/Footer.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(  var(--color-accent1) / <alpha-value>)",
          2: "rgb(var(--color-accent2) / <alpha-value>)",
        },
        content: "rgb(var(--color-content) / <alpha-value>)",
        supporter: "rgb(var(--color-supporter) / <alpha-value>)",
      },
      animation: {
        rotate: "rotate-center .6s ease-in-out both",
      },
      boxShadow: {
        "glow-accent-1": "0px 0px 84px 0px rgba(53, 129, 184, 0.9)",
        "glow-accent-2": "0px 0px 84px 0px rgba(223, 41, 53, 0.9)",
      },
    },
  },
  plugins: [],
};
