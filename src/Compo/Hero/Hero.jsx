import React from 'react'
import Ia from '../../assets/yoAcurrate.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { CgMenuMotion } from "react-icons/cg";

import './Her.css'

function Hero() {
  return (
    <section className='hero'> 
    <div className='navMovil'>
    <CgMenuMotion className='icon'/>
    <div className="btnMovil">
        <button>CV</button>
        </div>
    </div>
    <div className='nav'>
        <p>Home</p>
        <p>Projects</p>
        <p>Skills</p>
        <p>UX/UI</p>
        <p>About</p>
        <div className="btn">
        <button>Lets Chat</button>
        </div>
    </div> 
    <div className='title'>
        <h3>Hola, Soy Gabriela</h3>
        <h1>PROGRAMADORA</h1>
        <h2>DEMOS VIDA A<br/> TU IDEA</h2>
        <ul>
          <li><FaSquareInstagram className='icon'/></li>
          <li><FaGithub className='icon'/></li>
          <li><SiGmail className='icon'/></li>
          <li><FaLinkedin className='icon'/></li>
        </ul>
        <div className='logo'>
        {/* <img src={Ia} alt="" /> */}
        </div>
    </div>
    </section>
  )
}

export default Hero;