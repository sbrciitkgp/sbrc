import React, { useState } from "react";
import "./Navbar.css"
import {motion} from "framer-motion";
import Img from "../../assets/images/sbrclogo.png";
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
function Navbar(){

    const [header,changeHeader]=useState("header fixed-top ")
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        
        changeHeader("header fixed-top sticky header-scrolled")
      } 
      else {
        changeHeader("header fixed-top ")
      }
    };

    
    const sections=document.querySelectorAll("section");
    const navLi=document.querySelectorAll(".nav-link")
    
    window.addEventListener("scroll", () => {
    
      let current="";
      sections.forEach( section => {
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
      
        if(window.scrollY >= sectionTop-sectionHeight/3){
          current=section.getAttribute('id');
        }
      })
      navLi.forEach(a => {
        a.classList.remove("active");
        if(a.classList.contains(current)){
          a.classList.add("active");
        }
      })
    });
   

  
    const [Nav,switchNav]=useState("navbar");
    const [Icon,switchIcon]=useState("fa-solid fa-bars mobile-nav-toggle");
    const [state,changeState]=useState(false);

    function mobNav(){
      changeState(!state);

      if(state)
      {
      switchNav("navbar-mobile");
      switchIcon("fa-solid fa-xmark mobile-nav-toggle");

    }
    else{
    switchNav("navbar");
    switchIcon("fa-solid fa-bars mobile-nav-toggle");
      }
    }
    function closeNav(){
      if(Nav==="navbar-mobile"){ mobNav()}
    }
   
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <motion.div >
        <header id="header" className={header}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
    <HashLink className="logo d-flex align-items-center "  to={"#home-page"}><img style={{scale:"1.1"}} className="logo-img" src={Img} alt="" />
       </HashLink>
      <nav 
       id="navbar" className={Nav}>
      <div id="scrollspy1">
        <ul >
          <li onClick={closeNav}><HashLink  className="nav-link scrollto active home-page" style={{width:"auto"}} to={"#home-page"}>Home</HashLink></li>
          <li onClick={closeNav}><HashLink className="nav-link scrollto about-page" to={"#about-page"}>About</HashLink></li>
          <li onClick={closeNav}><HashLink className="nav-link scrollto what-we-do" to="#what-we-do">What We Do</HashLink></li>
          <li onClick={closeNav}><a onClick={scrollToTop} className="nav-link scrollto team"  href="#/team" >Team</a></li>
          <li onClick={closeNav}><HashLink  className="nav-link scrollto gallery" to="#gallery">Gallery</HashLink></li>
          <li onClick={closeNav}><HashLink className="nav-link scrollto contact-us-page" to="#contact-us-page">Contact</HashLink></li>
        </ul>
        </div>
        <button style={{height:"40px",width:"40px",backgroundColor:"transparent",border:"none"}} onClick={mobNav} className={Icon}></button>
      </nav>
    </div>
  </header>
  </motion.div>
    );
}

export default Navbar;