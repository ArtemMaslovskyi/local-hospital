import React, { useState } from "react";
import { nanoid } from "nanoid";
import doctorsData from "./doctorsData";

export default function Doctors() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  //departments list
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
      name: "Internal Medicine",
      id: nanoid(),
    },
    {
      name: "Pediatrics",
      id: nanoid(),
    },
  ];
  //doctors filter
  const getDoctorsByDeppartment = (departmentName) =>
    doctorsData.reduce((acc, doctor) => {
      if (doctor.deppartment === departmentName) {
        acc.push(doctor);
      }
      return acc;
    }, []);
  //click function for buttons
  const handleClick = (departmentName) => {
    setSelectedDepartment(departmentName);
    return departmentName;
  };
  //doctors card output
  const doctorsCard = getDoctorsByDeppartment(selectedDepartment).map(
    (item) => (
      <div
        key={item.id}
        className="flex flex-col items-center p-2 transition-all duration-300 border-2 rounded w-52 shadow-glow-accent-1 hover:shadow-glow-accent-2"
      >
        <img src={item.img} alt="doctor" className="w-36"></img>
        <p className="my-1 font-bold text-wrap">{item.name}</p>
      </div>
    )
  );
  //buttons output
  const buttons = departments.map((item) => (
    <button
      key={item.id}
      className="p-1 m-1 font-bold transition-all duration-200 ease-in border-2 rounded shadow-glow-accent-1 hover:shadow-glow-accent-2"
      onClick={() => handleClick(item.name)}
    >
      {item.name}
    </button>
  ));

  return (
    <section className="flex flex-col text-content">
      <div className="mx-6 text-content">
        <h2 className="text-6xl tracking-tighter text-center">Doctors</h2>
        <p className="text-base text-start">Please choose department</p>
        <div className="flex flex-row m-4 justify-evenly">{buttons}</div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 text-sm place-items-center">
        {doctorsCard}
      </div>
    </section>
  );
}
