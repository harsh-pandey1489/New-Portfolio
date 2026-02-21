import React from 'react'
import world from '../assets/world.png';

import expense from '../assets/expense 1.png';
const Projects = () => {
    const projects = [
        {
            name: "WorldAtlas",
            image: world,
            tech: ["React", "Tailwind", "Rest API"],
            description: "A web application that provides users with comprehensive information about countries worldwide. It offers details such as population, languages, currencies, and more, all fetched from a REST API. ",
            liveLink:"https://world-atlas-app-lemon.vercel.app/",
            codeLink:"https://github.com/harsh-pandey1489/world-atlas-app"
        },

        {
            name: "Expense-Tracker",
            image: expense,
            tech: ["React", "Tailwind", "Local Storage"],
            description: "A web application that helps users track their expenses and manage their finances effectively. It allows users to add, edit, and delete expenses, categorizing them for better organization. ",
            liveLink:"http://expense-tracker-chi-nine-29.vercel.app/",
            codeLink:"https://github.com/harsh-pandey1489/expense-tracker"
        }
        ,
       

    ]
    return (
        <section name='projects' className=' bg-gray-950'>
            <div className=' w-full h-1 bg-gradient-to-r from-slate-500 to-slate-800 mt-8'></div>
            <h1 className='text-center mt-5'>Projects</h1>

            {/* projects container */}
                        <div className=' relative w-full h-full flex gap-8 justify-center items-center md:flex-wrap overflow-x-auto md:flex-row flex-col mt-10'>
                            {projects.map((project, index) => (
                                <div key={index} className='w-[90%] mb-4 h-[600px] md:w-96 rounded-lg shadow-lg shadow-[rgba(20,193,208,0.35)] mt-10 flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 flex-shrink-0 border border-blue-700 p-6'>
                                    <img src={project.image} alt={project.name} className='w-full h-64 rounded-lg shadow-md shadow-[rgba(20,193,208,0.35)] object-cover' />
                                    <h3 className='p-4 font-bold text-xl text-white'>{project.name}</h3>
                                    <p className='text-sm p-5 text-center text-gray-300 border-2 border-blue-700'>{project.description}</p>
                                    
                                    {/* Tech Stack */}
                                    <div className='flex flex-wrap gap-2 mt-4 justify-center w-full'>
                                        {project.tech.map((t, i) => (
                                            <span key={i} className='px-3 py-1 bg-blue-900 border border-purple-500 rounded-full text-xs text-purple-200'>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className='flex gap-3 mt-6 mb-2'>
                                        <a href={project.liveLink}><button className='px-4 py-2 cursor-pointer bg-blue-700 hover:bg-blue-600 rounded text-white text-sm font-semibold transition-colors'>Live</button></a>
                                        <a href={project.codeLink}><button className='px-4 py-2 cursor-pointer bg-gray-700 hover:bg-gray-600 rounded text-white text-sm font-semibold transition-colors'>Code</button></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=' top-500 md:top-450 left-0 absolute text-6xl'>
                          
                        </div>
                    </section>
                )
}

export default Projects
