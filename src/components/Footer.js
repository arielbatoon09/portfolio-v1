import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center border-t-2 w-full p-c">
          <div className="py-5">
            <h1 className="text-gray-700 dark:text-white text-lg text-center font-bold">Ariel Batoon.</h1>
          </div>
          <div className="hero-social flex gap-5 my-2 justify-center md:justify-start">
            <a href="https://github.com/arielbatoon09"><FaGithub className="text-gray-700 dark:text-white text-2xl"/></a>
            <a href="#"><FaLinkedin className="text-gray-700 dark:text-white text-2xl"/></a>
            <a href="https://www.instagram.com/rielistics/"><FaInstagram className="text-gray-700 dark:text-white text-2xl"/></a>
            <a href="https://www.facebook.com/itsarielbatoon"><FaFacebookSquare className="text-gray-700 dark:text-white text-2xl"/></a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer