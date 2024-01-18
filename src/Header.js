import React from "react";
import { BiHealth } from "react-icons/bi";
import { nanoid } from "nanoid";

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
    </header>
  );
}
