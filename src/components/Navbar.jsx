import React from 'react';
import logo from '../assets/CM_logo.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img className=" mx-2 w-10 rounded-3xl" src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 flex-shrink-0 items-center justify-between m-8 text-2xl ">
        <a href="https://www.linkedin.com/in/chnadra/" target="_blank"><FaLinkedin/></a>
         <a href="https://github.com/cm313" target="_blank" ><FaGithub/></a>
         <a href="https://x.com/home"><FaXTwitter/></a>
          <a href="https://www.instagram.com/"><FaInstagram/></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar