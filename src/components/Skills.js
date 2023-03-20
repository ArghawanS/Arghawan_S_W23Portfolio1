import React from "react";

export default function Skills() {
  return (
    <section id="skill">
      <div className="px-8 py-10  z-10 w-full  border-4 border-gray-800 bg-gray-900  hover:opacity-200  mb-16 ">
        <div className="text-center mb-=0">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white  text-green-600 ">
            My Skills
          </h1>
          <p className="text-base text-2xl  font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-10">
            Here are some of the technologies that I am most proficient at using.
          If you would like to see a complete list of my skills, or if you are
          unfamiliar with any of the logos displayed below, please feel free to
          look at my resume.
          </p>
        </div>
        <div className="flex flex-wrap mx-32 mt-10">
       <img
              className=" rounded float-right"
              alt="Arghawan Photo"
              src="../pro.png"
              width={1500}
              height={1000}
              style={{ borderRadius: "5%" }}
            />
      </div>
      </div>
    </section>
  );
}
