import React from "react";
import { Capstone1 } from "./CapsData";

export default function Capstone() {
  return (
    <section id="capstone">
       <div className="px-8 py-10  z-10 w-full  border-4 border-gray-800 bg-gray-900  hover:opacity-200  mb-16 ">
        <div className="flex flex-col w-full mb-5">
          <h1 className="card-title title-font sm:text-4xl text-3xl mb-5 font-lage text-green-600 text-center ">
           Capstone Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            Here's link to my Capstone Projects you may wish to visit for details.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Capstone1.map((capstone) => (
            <a
              href={capstone.link}
              key={capstone.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={capstone.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {capstone.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {capstone.title}
                  </h1>
                  <p className="leading-relaxed">{capstone.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>  
      </div>
    </section>
  );
}
