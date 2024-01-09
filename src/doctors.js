import React from "react";
import { nanoid } from "nanoid";

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
    <button key={item.id} className="p-1 m-1 font-bold border-2 rounded">
      {item.name} <b className="hover:animate-pulse">▼</b>
    </button>
  ));
  return (
    <section className="flex font-content">
      <div className="w-full mx-6 text-content">
        <h2 className="text-6xl tracking-tighter text-center">Doctors</h2>
        <p className="text-base text-start">Please choose department</p>
        <div className="flex flex-col items-start m-4">{buttons}</div>
      </div>
    </section>
  );
}
