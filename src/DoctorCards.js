import React from "react";
import doctorsData from "./doctorsData";

export default function DoctorCards() {
  const doctorCard = doctorsData.map((item) => (
    <div key={item.id} className="p-2 border-2 w-28">
      <img src={item.img} alt="doctor" className="w-24"></img>
      <p className="text-wrap">{item.name}</p>
    </div>
  ));
  return (
    <div className="grid grid-cols-4 gap-4 mt-8 text-sm place-items-center">
      {doctorCard}
    </div>
  );
}
