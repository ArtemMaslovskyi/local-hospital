import React from "react";
import { BiHealth } from "react-icons/bi";
import { nanoid } from "nanoid";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const navbar = [
    {
      name: "Hospital",
      id: nanoid(),
    },
    {
      name: "Doctors",
      id: nanoid(),
    },
    {
      name: "Contact",
      id: nanoid(),
    },
    {
      name: "Veterans",
      id: nanoid(),
    },
  ];
  const navMenu = navbar.map((item) => (
    <h2
      key={item.id}
      className="mx-4 text-xl font-bold cursor-pointer hover:underline decoration-supporter text-content hover:decoration-2 "
    >
      {item.name}
    </h2>
  ));
  // dark mode button function
  const [darkMode, setDarkMode] = React.useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };
  return (
    <header className="flex items-center justify-between">
      <BiHealth
        size={"80px"}
        color="373737"
        className="w-12 m-4 cursor-pointer hover:animate-rotate lg:w-20 md:w-14 sm:w-0"
      />
      <h1 className="mx-4 text-2xl font-extrabold cursor-pointer text-content">
        Hadiach Hospital
      </h1>
      <div className="flex flex-wrap">{navMenu}</div>
      <button onClick={toggleTheme}>
        {" "}
        {darkMode ? (
          <FaSun size={32} color="white" />
        ) : (
          <FaMoon size={32} color="373737" />
        )}
      </button>
    </header>
  );
}
