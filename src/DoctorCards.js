import React from "react";
import { nanoid } from "nanoid";

export default function DoctorCards() {
  const doctorList = [
    {
      id: nanoid(),
      name: "Jeffrey Adkins",
      deppartment: "Birth",
      img: "https://thumbs.dreamstime.com/z/senior-doctor-laughing-to-camera-16276713.jpg",
    },
    {
      id: nanoid(),
      name: "Jeffrey Adkins",
      deppartment: "Surgery",
      img: "https://thumbs.dreamstime.com/z/senior-doctor-laughing-to-camera-16276713.jpg",
    },
    {
      id: nanoid(),
      name: "Jeffrey Adkins Surgery",
      deppartment: "Surgery",
      img: "https://thumbs.dreamstime.com/z/senior-doctor-laughing-to-camera-16276713.jpg",
    },
    {
      id: nanoid(),
      name: "Jeffrey Adkins",
      deppartment: "Birth",
      img: "https://thumbs.dreamstime.com/z/senior-doctor-laughing-to-camera-16276713.jpg",
    },
    {
      id: nanoid(),
      name: "Jeffrey Adkins",
      deppartment: "Birth",
      img: "https://thumbs.dreamstime.com/z/senior-doctor-laughing-to-camera-16276713.jpg",
    },
    {
      id: nanoid(),
      name: "Jeffrey Adkins",
      deppartment: "Birth",
      img: "https://thumbs.dreamstime.com/z/senior-doctor-laughing-to-camera-16276713.jpg",
    },
  ];
  const doctorCard = doctorList.map((item) => (
    <div key={item.id} className="border-2 w-28 h-36">
      <img src={item.img} alt="doctor"></img>
      <p>{item.name}</p>
    </div>
  ));
  return (
    <div className="grid grid-cols-4 gap-2 mt-8 place-items-center">
      {doctorCard}
    </div>
  );
}
