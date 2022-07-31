import React from 'react';
import Avatar from '../assets/hero-img.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <section name="home" className="bg-white dark:bg-black">
      <div className="hero container lg:flex-row flex-col justify-between items-center gap-2 sm:gap-10">
        <div className="left-hero">
          <div className="hero-description flex flex-col items-start justify-center">
            <h1 className="font-bold text-gray-900 dark:text-gray-100 md:text-4xl">FRONT-END DEVELOPER</h1>
            <h2 className="font-bold mt-5 text-gray-700 dark:text-gray-100 md:text-2xl">Student | Freelancer</h2>
            <p className="mt-2 dark:text-gray-100 text-md text-justify">A <span className="font-bold">Freelancer</span> who is helping different sizes of business or
             organization by providing quality solution. In addition, a third-year college student studying BS in Information Technology.</p>            
          </div>
          <div className="hero-social flex gap-5 my-2 items-start justify-start">
            <a href="https://github.com/arielbatoon09"><FaGithub className="card1 text-gray-700 dark:text-black text-4xl"/></a>
            <a href="#"><FaLinkedin className="card1 text-gray-700 dark:text-black text-4xl"/></a>
            <a href="https://www.instagram.com/rielistics/"><FaInstagram className="card1 text-gray-700 dark:text-black text-4xl"/></a>
            <a href="https://www.facebook.com/itsarielbatoon"><FaFacebookSquare className="card1 text-gray-700 dark:text-black text-4xl"/></a>
          </div>
        </div>
        <div className="right-hero w-full h-auto overflow-hidden mb-5 order-first md:order-last">
          <img src={Avatar} alt="Ariel Batoon" className="avatar-img rounded-3xl shadow"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero