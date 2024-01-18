import React from "react";

export default function Hospital() {
  return (
    <section className="flex">
      <div className="w-auto mx-6 md:w-1/2 text-content">
        <h2 className="text-6xl tracking-tighter">Local Hospital</h2>
        <p className="my-4 text-base leading-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam
          nemo? Laudantium omnis eum voluptate aliquam harum cumque repudiandae
          animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          ullam nemo? Laudantium omnis eum voluptate aliquam harum cumque
          repudiandae animi!
        </p>
      </div>
      <img
        className="w-[300px] md:w-[400px] md:flex hidden"
        src="https://cdn-icons-png.flaticon.com/512/4497/4497898.png"
        alt="img"
      ></img>
    </section>
  );
}
