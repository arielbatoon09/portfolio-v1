import React, { useState } from 'react';
import useTheme from './useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';
import '../styles/home.css';

const Navbar = () => {
  const [nextTheme, setTheme] = useTheme();
  const [color, setColor] = useState(false);
  const handleColor = () => setColor(!color);
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  
  return (
    <header className="bg-white dark:bg-black">
        <nav className="navbar container flex justify-between">
            <div className="brand-logo cursor-pointer">
                <h1 className="title text-black dark:text-white">Ariel Batoon</h1>
                <h2 className="med-title text-black dark:text-white">Front-end Developer</h2>
            </div>
            <div className="navList">
              <ul className="hidden lg:flex gap-8">
                  <li className="nav-links text-black dark:text-white cursor-pointer">
                  <Link to="about" smooth={true} duration={500}>About</Link></li>
                  <li className="nav-links text-black dark:text-white cursor-pointer">
                  <Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                  <li className="nav-links text-black dark:text-white cursor-pointer">
                  <Link to="certifications" smooth={true} duration={500}>Certificate</Link></li>
                  <li className="nav-links text-black dark:text-white cursor-pointer">
                  <Link to="blog" smooth={true} duration={500}>Blog</Link></li>                                    
              </ul>
            </div>
            <div className="switches flex items-center">
              <div onClick={handleColor}>
                  {!color ? <FaMoon className=" icons text-yellow-400 cursor-pointer" onClick={() => setTheme(nextTheme)}/> : 
                  <FaSun className="icons text-yellow-400 cursor-pointer" onClick={() => setTheme(nextTheme)}/>}
              </div>
              <div className="menu cursor-pointer lg:hidden" onClick={handleNav}>
                  {!nav ? <BiMenu className="text-black dark:text-white text-3xl"/> : 
                  <MdClose className="text-black dark:text-white text-3xl"/>}
              </div>
            </div>
        </nav>
        <div className="nav-mobile">
              <ul className={!nav ? 'hidden' : 'container flex flex-col text-center'}>
                  <li className="nav-links pb-2 border-b-2 border-zinc-300 w-full text-black dark:text-white cursor-pointer">
                  <Link onClick={handleClose} to="about" smooth={true} duration={500}>About</Link></li>
                  <li className="nav-links py-2 border-b-2 border-zinc-300 w-full text-black dark:text-white cursor-pointer">
                  <Link onClick={handleClose} to="projects" smooth={true} duration={500}>Projects</Link></li>
                  <li className="nav-links py-2 border-b-2 border-zinc-300 w-full text-black dark:text-white cursor-pointer">
                  <Link onClick={handleClose} to="certifications" smooth={true} duration={500}>Certificate</Link></li>
                  <li className="nav-links py-2 border-b-2 border-zinc-300 w-full text-black dark:text-white cursor-pointer">
                  <Link onClick={handleClose} to="blog" smooth={true} duration={500}>Blog</Link></li>    
              </ul>
            </div>
    </header>
  )
}

export default Navbar