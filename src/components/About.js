import React from "react";
export default function About() {
  return (
    <section id="about" class=" mb-44 ">
       
      <div className="mb-10 leading-relaxed mb-28 ">
      <div className="container px-5 py-5 mb-5 mx-auto" >
          <div className="text-center mb-5" >
            
          <h1 className="title-font fs-1 sm:text-5xl text-4xl mb-10 font-medium text-white mt-1 mr-96">
             Hi, MY NAME IS ARGHAWAN GHULAM SIDDIQ, Web Developer
            </h1>
            <div class="mt-px">
                 <img
              className=" rounded float-right mt-px"
              alt="Arghawan Photo"
              src="../Arghawan.jpg"
              width={320}
              height={300}
              style={{ borderRadius: "10%" }}
            /></div>
          <p className="mb-20 leading-relaxed text-3xl ml-1 mt-34 mr-96" >
         I am currently studying Computer Programming and Analysis at George Brown College.
            On my free time, I love to learn new technologies, read books and go out for a walk.
            </p>
             <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See My Projects
              </a>
             
              
          </div>
             <div className="ml-0">
                 <a href="https://www.linkedin.com/in/arghawan-siddiq-8283931ba/" class="home-hero__social-icon-link">
               <img
                  src="../linkedin-ico.png"
                  width={30}
                  height={30}
              alt="icon"
                class="home-hero__social-icon"
               /></a>
            </div>
             <div className="flex justify-left ">
          <a href="https://github.com/ArghawanS" class="home-hero__social-icon-link">
            <img
              src="../github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
                />
                
          </a>
        </div>
         </div>
        </div>
      </div>
    </section>
  );
}
