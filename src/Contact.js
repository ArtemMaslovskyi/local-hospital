import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col text-content">
      <div className="mx-6 my-6 text-content">
        <h2 className="text-6xl tracking-tighter text-center">Contact</h2>
      </div>
      <div className="flex flex-row gap-2 m-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6052.119372791983!2d33.98113128541075!3d50.37396157099931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4129d5aee8d6766d%3A0x37efbf91fbd940a9!2z0JPQkNCU0K_QptCs0JrQkCDQptCg0Js!5e0!3m2!1suk!2sua!4v1705004534340!5m2!1suk!2sua"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
          className="w-1/2 border-2 rounded-md"
        ></iframe>
        <div className="grid h-6 grid-cols-2">
          <p className="row-span-2">Telephone:</p>
          <p className="row-span-1 cursor-pointer text-supporter lining-nums">
            +380990999999
          </p>
          <p className="cursor-pointer text-supporter lining-nums">
            +380990999999
          </p>
        </div>
      </div>
    </section>
  );
}
