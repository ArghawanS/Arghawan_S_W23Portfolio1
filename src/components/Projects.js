import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-10  z-10 w-full  border-4 border-gray-800 bg-gray-900  hover:opacity-200 mb-16">
      <div className="container px-5 py-5 mx-auto text-center lg:px-10 mb-16 ">
        <div className="flex flex-col w-full mb-5">
          <h1 className="card-title title-font sm:text-4xl text-3xl mb-5 font-lage text-green-600 text-center ">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here's a few projects I've worked on that I am proud of. They use many
            different technologies which further increases my skill tree.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>  
      </div>
    </section>
  );
}
