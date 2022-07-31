import React from 'react';
import Bootstrap from '../assets/stacks/Bootstrap.png'
import Figma from '../assets/stacks/Figma.png'
import Java from '../assets/stacks/Java.png'
import Reacts from '../assets/stacks/React.png'
import Sass from '../assets/stacks/Sass.png'
import Tailwind from '../assets/stacks/Tailwind.png'
import Web from '../assets/stacks/Web.png'
import Photoshop from '../assets/stacks/Photoshop.png'
import Wordpress from '../assets/stacks/Wordpress.png'
import Shopify from '../assets/stacks/Shopify.png'
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../styles/home.css';

const AboutMe = () => {
  return (
    <section name="about" className="about bg-gray-100 dark:bg-black">
      <div className="overflow-hidden md:overflow-visible container flex flex-col dark:bg-black">
        <div className="flex flex-col md:-translate-y-10 -translate-y-15 items-center text-center">
          <h1 className="text-black-100 dark:text-white font-bold md:text-7xl text-4xl p-2 md:p-1">Ab<span className="border-b-4 border-gray-600 dark:border-white">out</span></h1>
          <p className="text-gray-800 dark:text-white font-bold mt-3 text-md pb-5">Hello! My name is Ariel Batoon a 21-year-old based in Cebu, Philippines.</p>
        </div>
        <div className="md:flex flex-wrap xl:flex-nowrap text-left items-center w-[320px] sm:w-full">
          <div className="bg-white drop-shadow-md p-5 mb-5 rounded-md">
            <p className="text-md">I specialize in creating websites for small to medium and large size businesses. I am here to help you make your brand store professional with the latest web design and UI techniques, to bring your business at the top of the industry.</p>
            <p className="mt-2 text-md">I have the experience of several web development projects which I personally originated from scratch, plus, several projects of web redesigning in which I not only redesigned the client's website or application but also debugged it.</p>
            <p className="mt-2 text-md">In my spare time, I enjoy learning new things and exploring with technology. I constantly have to remind myself to keep inspiring myself to go above and beyond.</p>
            <h3 className="mt-5 font-bold text-2xl text-gray-600">Do you want to work with me?</h3>
            <p className="mt-3">Send me an email at <span className="font-bold underline">info.arielbatoon@gmail.com</span> or schedule free consultation and we will start discussing about your project.</p>
            <h3 className="mt-5 font-bold text-2xl text-gray-600">Connect With Me?</h3>
            <div className="socialMedia flex flex-col md:ml-5 text-left">
              <p>→ <a href="https://www.facebook.com/itsarielbatoon">Facebook</a></p>
              <p>→ <a href="https://www.instagram.com/rielistics/">Instagram</a></p>
              <p>→ <a href="https://github.com/arielbatoon09">GitHub</a></p>
              <p>→ <a href="www.linkedin.com/in/arielbatoon">LinkedIn</a></p>
            </div>
              <button className="bg-black dark:bg-black flex items-center gap-2 w-full md:w-1/2 py-2 px-5 shadow rounded-md mt-5 hover:bg-gray-700 dark:hover:bg-gray-700">
              <FaRegCalendarAlt className="text-white text-xl"/><a href="https://calendly.com/arielbatoon/consultation" className="text-white dark:text-white text-lg font-bold">Schedule Consultation</a></button>
          </div>
          <div className="about-right flex flex-col items-center mx-auto">
            <h3 className="font-bold text-center md:w-[500px] w-[280px] text-1xl md:text-3xl bg-black text-white dark:bg-white dark:text-black rounded-lg py-3">Technology Stacks</h3>
            <div className="stacks flex flex-row flex-wrap mt-5 items-center justify-center ml-5 w-[300px] md:w-[500px]">
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Reacts} alt="React"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Java} alt="Java"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Web} alt="Web development technology"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Tailwind} alt="Tailwind"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Bootstrap} alt="Bootstrap"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Sass} alt="Sass CSS Frameworks"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Figma} alt="Figma"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Photoshop} alt="Photoshop"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Wordpress} alt="Photoshop"></img>
              <img className="card2 bg-white drop-shadow-md p-5 mb-5 mr-5 rounded-md" src={Shopify} alt="Photoshop"></img>            
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe