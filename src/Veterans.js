import React from "react";

export default function Veterans() {
  return (
    <section className="text-content">
      <h2 className="text-6xl tracking-tighter text-center">Veterans</h2>
      {/* bento */}
      <div className="flex justify-center text-wrap">
        <div className="grid grid-cols-6 grid-rows-6 *:bg-neutral-100 *:rounded-2xl gap-2 m-6 w-[1000px] h-[1000px] place-content-center">
          <div className="row-span-5">d</div>
          <div className="aspect-square">
            <img
              alt="millitary"
              src="   https://cdn-icons-png.flaticon.com/512/10823/10823976.png "
            ></img>
          </div>
          <div className="col-span-3">d</div>
          <div className="row-span-2">d</div>
          <div className="col-span-4 row-span-4 aspect-square">
            <h2 className="text-4xl ">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iusto, impedit, fugiat incidunt pariatur maxime voluptatibus quo
              numquam, a praesentium deserunt eius repudiandae? Ratione cum
              suscipit dolorum totam excepturi ducimus.
            </p>
          </div>
          <div className="row-span-4">d</div>
          <div className="col-span-3">d</div>
          <div className="col-span-2">d</div>
        </div>
      </div>
    </section>
  );
}
