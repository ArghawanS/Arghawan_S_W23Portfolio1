 import React from "react";

export default function Footer() {
    return (
        <section id="footer" class="fotter bg-black ">
                <footer className="text-center mb-20" style={{ margin: 'auto', height: '100px', paddingRight: '10px', paddingTop: '10px' }}>
                    <div className="text-right mb-20" style={{ paddingRight: '50px', }}>
                        <h2 class="heading heading-sm main-footer__heading-sm">
                    <span id="contact textaline-right" style={{ paddingRight: '18px',paddingTop: '10px'  }} >Contact me</span>
                </h2>
                    <a href="https://www.linkedin.com/in/yaroslavyatsyk/">
                        <i class="fa fa-linkedin-square" style={{ fontSize: '36px' }}></i>
                    </a>
                    <a href="https://github.com/yaroslavyatsyk">
                        <i class="fa fa-github" style={{ fontSize: '36px' }}></i>
                    </a>
                    <a href="mailto:arghawan.siddiq@gmail.com" target="_blank" rel="noreferrer noopener" >
                        <i class="fa fa-envelope" style={{ fontSize: '36px' }}></i>
                    </a> <div className="text-center mb-20">
                        &copy; Copyright 2023.by
                        Arghawan GHulam Siddiq

                   
                </div></div>
     </footer>
             
        </section>

    )
}