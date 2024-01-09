/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.js",
    "./src/App.js",
    "./src/Header.js",
    "./src/hospital.js",
    "./src/doctors.js",
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
    },
  },
  plugins: [],
};
