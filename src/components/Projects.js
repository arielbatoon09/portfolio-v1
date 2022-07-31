import React from 'react';
import Project1 from '../assets/projects/project-1.png';
import Project from '../assets/projects/project.png';
import Reacts from '../assets/stacks/React.png';
import Tailwind from '../assets/stacks/Tailwind.png';

const Projects = () => {
  return (
    <section name="projects" className="bg-gray-100 dark:bg-black">
      <div className="container overflow-hidden flex justify-center items-center">
        <div className="project py-10 flex flex-col items-center justify-center">
          <div className="projTitle text-black-100 dark:text-white pb-10">
            <h1 className="text-4xl md:text-7xl font-bold">Proj<span className="border-b-4 border-gray-600 dark:border-white">ects</span></h1>
          </div>
          <div className="projList flex flex-row flex-wrap mx-auto w-full gap-2 p-5 overflow-hidden">
            {/*Project 1*/}
            <div className="projBox cursor-pointer flex flex-col flex-auto bg-gradient-to-bl from-black to-gray-700 drop-shadow-md p-5 rounded-xl w-[350px] sm:w-[300px] h-full">
              <div className="flex flex-col items-center md:items-start object-cover">
                <h1 className="text-black p-1 text-sm mb-3 bg-white rounded-md">Portfolio V1 - Light/Dark</h1>
                <img src={Project1} alt="/" className="hover:scale-110 transition ease-in-out duration-700 w-[200px] sm:w-full"></img>
                <div className="stacksUse flex w-[30px]">
                  <img src={Reacts} alt="/"></img>
                  <img src={Tailwind} alt="/"></img>
                </div>
                <h2 className="text-xs text-center md:text-md pb-2 text-white tracking-wider">Built with ReactJs and TailwindCSS</h2>
              </div>
              <div className="btns flex justify-center md:justify-start items-center text-center">
                <button className="text-sm border-white border-2 rounded-2xl hover:bg-white text-white hover:text-black py-1 px-6 md:px-8 mr-2"><a href="http://www.arielbatoon.com/">View</a></button>
                <button className="text-sm border-white border-2 rounded-2xl hover:bg-white text-white hover:text-black py-1 px-4 md:px-7"><a href="https://github.com/arielbatoon09/portfolio-v1">GitHub</a></button>
              </div>
            </div>  
            {/*Project 1 - End*/} 
            {/*Project 2*/}
            <div className="projBox cursor-pointer flex flex-col flex-auto bg-gradient-to-bl from-black to-gray-700 drop-shadow-md p-5 rounded-xl w-[350px] sm:w-[300px] h-full">
              <div className="flex flex-col items-center md:items-start object-cover">
                <h1 className="text-black p-1 text-sm mb-3 bg-white rounded-md">Project 2</h1>
                <img src={Project} alt="/" className="hover:scale-110 transition ease-in-out duration-700 w-[200px] sm:w-full"></img>
                <div className="stacksUse flex w-[30px]">
                  <img src={Reacts} alt="/"></img>
                  <img src={Tailwind} alt="/"></img>
                </div>
                <h2 className="text-xs text-center md:text-md pb-2 text-white tracking-wider">Built with ReactJs and TailwindCSS</h2>
              </div>
              <div className="btns flex justify-center md:justify-start items-center text-center">
                <button className="text-sm border-white border-2 rounded-2xl hover:bg-white text-white hover:text-black py-1 px-6 md:px-8 mr-2"><a href="http://www.arielbatoon.com/">View</a></button>
                <button className="text-sm border-white border-2 rounded-2xl hover:bg-white text-white hover:text-black py-1 px-4 md:px-7"><a href="#">GitHub</a></button>
              </div>
            </div>  
            {/*Project 2 - End*/}    
            {/*Project 3*/}
            <div className="projBox cursor-pointer flex flex-col flex-auto bg-gradient-to-bl from-black to-gray-700 drop-shadow-md p-5 rounded-xl w-[350px] sm:w-[300px] h-full">
              <div className="flex flex-col items-center md:items-start object-cover">
                <h1 className="text-black p-1 text-sm mb-3 bg-white rounded-md">Project 3</h1>
                <img src={Project} alt="/" className="hover:scale-110 transition ease-in-out duration-700 w-[200px] sm:w-full"></img>
                <div className="stacksUse flex w-[30px]">
                  <img src={Reacts} alt="/"></img>
                  <img src={Tailwind} alt="/"></img>
                </div>
                <h2 className="text-xs text-center md:text-md pb-2 text-white tracking-wider">Built with ReactJs and TailwindCSS</h2>
              </div>
              <div className="btns flex justify-center md:justify-start items-center text-center">
                <button className="text-sm border-white border-2 rounded-2xl hover:bg-white text-white hover:text-black py-1 px-6 md:px-8 mr-2"><a href="http://www.arielbatoon.com/">View</a></button>
                <button className="text-sm border-white border-2 rounded-2xl hover:bg-white text-white hover:text-black py-1 px-4 md:px-7"><a href="#">GitHub</a></button>
              </div>
            </div>  
            {/*Project 3 - End*/}                                                                                                                                                                                                                             
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects