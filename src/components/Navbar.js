import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
              className="card-img-top ml-0 "
              alt="Logo Image"
              src="../logo.png"
              width={45}
              height={40}
            />
        <a className="title-font font-medium text-white mb-4 md:mb-0 ml-6">
          <a href="#about" className="ml text-xl">
            ARGHAWAN SIDDIQ
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-	flex flex-wrap items-right text-base justify-right">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#bio" className="mr-5 hover:text-white">
            Bio
          </a>
          <a href="#skill" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#capstone" className="mr-5 hover:text-white">
            Capstone Project
          </a>
          
          <a href="https://docs.google.com/document/d/16xNFOLglo09ntPNr0_ZeuX1fjxNWwAE7/edit?usp=sharing&ouid=115357702366424511704&rtpof=true&sd=true" className="mr-5 hover:text-white">
            Resume
          </a>
          <a href="https://docs.google.com/document/d/15njq8qs9Rxu1k4lu0AuxEcgvPWCeH7Ji/edit?usp=sharing&ouid=115357702366424511704&rtpof=true&sd=true" className="mr-5 hover:text-white">
            Cover Letter
          </a>
          
        </nav>
      </div>
    </header>
  );
}
