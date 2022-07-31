import React from 'react';
import Blog1 from '../assets/blog1.jpeg';
import Blog2 from '../assets/innovation.jpg';
import { HiCursorClick } from 'react-icons/hi';

const Blog = () => {
  return (
    <section name="blog" className="bg-gray-100 dark:bg-black">
      <div className="container overflow-hidden flex flex-col dark:bg-black py-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-black-100 dark:text-white font-bold md:text-7xl text-4xl pt-5">Latest B<span className="border-b-4 border-gray-600 dark:border-white">log</span></h1>
        </div>
        <div className="flex flex-wrap text-left justify-center items-center gap-5 py-10 ">
          <div className="bg-white drop-shadow-lg border-gray-200 border rounded-md p-5 w-[300px] h-full">
            <h3 className="font-medium text-xl">How to become a Front-end Developer in 2022?</h3>
            <img src={Blog1} alt="/" className="rounded-xl pt-2"></img>
            <h4 className="text-gray-500 pt-2">Published on July 27, 2022</h4>
            <p className="font-medium">→ <a className="hover:underline" href="https://medium.com/@arielbatoon/how-to-become-a-front-end-developer-6077634fbc66" target="_blank">Read Blog</a></p>
          </div>
          <div className="bg-white drop-shadow-lg border-gray-200 border rounded-md p-5 md:w-[300px] h-full">
            <h3 className="font-medium text-2xl">New Blog Soon</h3>
            <img src={Blog2} alt="/" className="rounded-xl pt-2"></img>
            <h4 className="text-gray-500 pt-2">Published on Date</h4>
            <p className="font-medium">→ <a className="hover:underline" href="#" target="_blank">Read Blog</a></p>
          </div>
          <div className="bg-white drop-shadow-lg border-gray-200 border rounded-md p-5 md:w-[300px] h-full">
            <h3 className="font-medium text-2xl">New Blog Soon</h3>
            <img src={Blog2} alt="/" className="rounded-xl pt-2"></img>
            <h4 className="text-gray-500 pt-2">Published on Date</h4>
            <p className="font-medium">→ <a className="hover:underline" href="#" target="_blank">Read Blog</a></p>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg border-gray-200 border rounded-md py-5 sm:py-5 px-11">
          <button className="flex items-center justify-center w-[150px]">
              <HiCursorClick className="text-xl lg:text-2xl"/>
              <a href="https://medium.com/@arielbatoon" className="text-sm lg:text-lg font-medium">View More</a>
            </button>
        </div>
      </div>      
    </section>
  )
}

export default Blog