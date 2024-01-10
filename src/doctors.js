import React from "react";
import { nanoid } from "nanoid";
import DoctorCards from "./DoctorCards";

export default function Doctors() {
  const departments = [
    {
      name: "Surgery",
      id: nanoid(),
    },
    {
      name: "Birth",
      id: nanoid(),
    },
    {
      name: "Incoming",
      id: nanoid(),
    },
    {
      name: "Traumatology",
      id: nanoid(),
    },
  ];

  const buttons = departments.map((item) => (
    <button
      key={item.id}
      className="p-1 m-1 font-bold transition-all duration-200 ease-in border-2 rounded shadow-glow-accent-1 hover:shadow-glow-accent-2"
    >
      {item.name} <b className="hover:animate-pulse">▼</b>
    </button>
  ));
  return (
    <section className="flex flex-col font-content">
      <div className="mx-6 text-content">
        <h2 className="text-6xl tracking-tighter text-center">Doctors</h2>
        <p className="text-base text-start">Please choose department</p>
        <div className="flex flex-row m-4 justify-evenly">{buttons}</div>
      </div>
      <DoctorCards></DoctorCards>
    </section>
  );
}
