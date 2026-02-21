import React from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import html from '../assets/html.jfif'
import javascript from '../assets/js-logo-javascript-sdk-freelogovectors.net_.png'
import react from '../assets/react.svg'
import css from "../assets/icons8-css3-240.png"
import tailwind from '../assets/Tailwind_CSS_Logo.svg.png'
import nodejs from '../assets/download.png'
import express from '../assets/express.jfif'
import mongodb from "../assets/mongo.png"

function About() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [100, 0]);
  const floatAnimation = (index) => ({
  animate: {
    y: [0, -10, 0, 10, 0],
    x: [0, 4, 0, -4, 0],
  },
  transition: {
    duration: 4 + index * 0.4, // different speed
    repeat: Infinity,
    ease: "easeInOut",
  },
});

  const skills = [
    {
      name: html,
    },
    {
      name: css,
    },
    {
      name: javascript,
    },
    {
      name: tailwind,
    },
    {
      name: react,
    },
    {
      name: nodejs,
    },
    {
      name:mongodb,
    },
    {
      name:express,
    }
  ]

  return (
    <>
      <section name='about' className='min-h-screen flex-wrap bg-gray-950'>
        <div className=' w-full h-1 bg-gradient-to-r from-slate-500 to-slate-800'></div>
       
        <div className='w-full h-full grid grid-cols-1 p-6 lg:grid-cols-2 gap-12'>
          <div className="w-full h-full flex justify-center items-start mt-6">
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="
      w-full md:w-[80%] 
      p-6 md:p-8 
      bg-gradient-to-br from-gray-900 to-gray-800 
      rounded-2xl 
      border border-gray-700
      shadow-xl shadow-[rgba(20,193,208,0.35)]
    "
  >
    {/* About Me */}
    <h2 className="text-center text-blue-400 text-2xl font-semibold mb-4 tracking-wide">
      About Me
    </h2>

    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 text-justify ">
     Passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. Strong hands-on experience with React, Tailwind CSS, and JavaScript, and currently expanding skills in Node.js and MongoDB to grow as a full-stack developer. Always eager to learn, improve, and build real-world projects.
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4" />

    {/* Education */}
    <h2 className="text-center text-blue-400 text-2xl font-semibold mb-3 tracking-wide">
      Education
    </h2>

    <div className="space-y-5">
      {/* MCA */}
      <div className="
        p-5 rounded-xl 
        bg-gray-950 
        border border-gray-700
        shadow-md hover:shadow-[rgba(20,193,208,0.4)]
        transition-shadow duration-300
      ">
        <h3 className="text-lg text-blue-400 font-semibold">
          Master of Computer Applications (MCA)
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          2024 – 2026
        </p>
        <p className="text-gray-300 text-sm">
          1st Semester: <span className="font-medium">8.22 SGPA</span>
        </p>
        <p className="text-gray-300 text-sm">
          2nd Semester: <span className="font-medium">8.61 SGPA</span>
        </p>
         <p className="text-gray-300 text-sm">
          3rd Semester: <span className="font-medium">8.44 SGPA</span>
        </p>
      </div>

      {/* BSc */}
      <div className="
        p-5 rounded-xl 
        bg-gray-950 
        border border-gray-700
        shadow-md hover:shadow-[rgba(20,193,208,0.4)]
        transition-shadow duration-300
      ">
        <h3 className="text-lg text-blue-400 font-semibold">
          Bachelor of Science (Mathematics)
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          2021 – 2024
        </p>
        <p className="text-gray-300 text-sm">
          CGPA: <span className="font-medium">7.67</span>
        </p>
      </div>
    </div>
  </motion.div>
</div>


{/* skill section */}

          <div className='w-full h-full mt-2 order-1 '>
            <h2 className='text-center p-2'>Skills</h2>
            <div className='flex flex-col justify-center items-center  ref={scrollRef} '>
              <motion.div
               initial={{
    opacity: 0,
    y: 80
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut"
  }}
  viewport={{ once: true, amount: 0.3 }}
 
                className=' p-5 md:p-8 mt-7  shadow-lg shadow-[rgba(20,193,208,0.5)] bg-gray-800 p-2 gap-6  rounded-2xl grid grid-cols-3 md:grid-cols-3  '>
                {skills.map((skill, index) => (<motion.div 
                  key={index}
                  {...floatAnimation(index)}
                  className=' transition-all duration-200 cursor-pointer hover:scale-110 w-20 h-20 md:w-25 md:h-25 p-2 rounded-2xl bg-gray-950 items-center flex justify-center  shadow-md shadow-[#606a6a] border-8'>
                  <img className=' object-cover w-17.5 rounded ' src={skill.name} />
                </motion.div>))}

              </motion.div>
            </div>

          </div>
        </div>



      </section>
    </>
  )
}

export default About
