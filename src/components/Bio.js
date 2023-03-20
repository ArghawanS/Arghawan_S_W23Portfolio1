
import React from "react";

export default function Bio() {
  return (
    <section id="bio"> 
       <div className="px-8 py-10  z-10 w-full  border-4 border-gray-800 bg-gray-900  hover:opacity-200  mb-16">
         <div class=" h-200 w-100 mt-32 ">
        <h1 className="card-title title-font sm:text-4xl text-3xl mb-5 font-lage text-green-600 text-center ">About Me
          </h1>
          </div>
          <div class="flex flex-row  flex justify-center relative h-200 w-100 mt-20  mb-28">
              <div class="basis-1/4 text-2xl whitespace-pre-wrap " >
                <h2 className="card-title title-font sm:text-4xl text-3xl mb-5 font-medium text-green-600 ml-10">Bio</h2>
              <p class="ml-10">
              I'm a react web developer with 2+ years of experience in web development.
               I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss. 
               I've done multiple small projects to learn basics and now doing more complex projects. 
            </p>
         </div >
            
              <div class="basis-1/4 text-2xl  h-200 w-100 ">
                 <h2 className="card-title title-font sm:text-4xl text-3xl mb-5 font-medium text-green-600 ml-6 " >Links</h2>
          
             
            <a href="https://docs.google.com/document/d/16xNFOLglo09ntPNr0_ZeuX1fjxNWwAE7/edit?usp=sharing&ouid=115357702366424511704&rtpof=true&sd=true" target="_blank" class="btn1 dynamicBgClr"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg ml-6">Resume</a><br /><br />
            <a href="" target="_blank" class="btn1"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg ml-6">Cover Letter</a>
                </div>
         
              <div class="basis-1/2 text-2xl h-200 w-100" >
              <h2 className="card-title title-font sm:text-4xl text-3xl mb-5 font-medium text-green-600 text-left ml-20 ">Career Goals</h2>  
             <p class ="ml-20 mr-28">My goals are to gain an opportunity to further my skills and knowledge of working in as or with a data analyst. I plan on using the skills and knowledge I have gained from George Brown College. A challenge that I may have is being new to this type of work environment.</p>
             </div> 
          </div>
        </div>

    </section>
  );
}
