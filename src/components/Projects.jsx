
import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// import baba from "../assets/baba-ratan.png";
import world from "../assets/world.png";
import expense from "../assets/expense 1.png";

const Projects = () => {

  const projects = [
    {
      name: "Social Media Ai Post Scheduler",
      image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1783416252/social-media-post_r3mfzd.png",
      tech: [ "React.js", "Tailwind CSS","TypeScript","Mongodb","NodeJs"],
      description:
        "Built a full-stack AI-powered social media scheduling platform using React.js, TypeScript, Tailwind CSS, Node.js, and MongoDB. Features include AI-assisted content generation, post scheduling, authentication, dashboard analytics, and responsive UI for seamless content management.",

      liveLink: "https://baba-ratan.vercel.app/",
      codeLink: "https://github.com/harsh-pandey1489/Social-media-Ai-post-scheduler",

     
    },
   
    {
      name: "AI Interview",
      image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1781253034/AiInterview_a0fucd.png",
      tech: ["React.js", "Redux", "Firebase","MongoDb","NodeJs","ExpressJs"],
      description:
        "Created a responsive expense management application with real-time tracking, categorization, and persistent local storage functionality for personal finance management.",

      liveLink:
        "https://three-interviewiq-pxf9.onrender.com/",

      codeLink:
        "https://github.com/harsh-pandey1489/3.interviewIQ",
    },
     {
      name: "Baba Ratan Website",
      image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1780472972/baba-ratan_sobi3q.png",
      tech: ["Next.js", "React.js", "Tailwind CSS"],
      description:
        "Developed a modern business website with responsive layouts, reusable components, and optimized frontend architecture focused on performance and clean user experience.",

      liveLink: "https://baba-ratan.vercel.app/",
      codeLink: "#",

     
    },

    {
      name: "World Atlas App",
      image: world,
      tech: ["React.js", "REST API", "Tailwind CSS"],
      description:
        "Built a country information platform using REST APIs with dynamic search, filtering, loading states, and responsive UI for seamless user experience across devices.",

      liveLink:
        "https://world-atlas-app-lemon.vercel.app/",

      codeLink:
        "https://github.com/harsh-pandey1489/world-atlas-app",

    },
     

    {
      name: "Expense Tracker",
      image: expense,
      tech: ["React.js", "Local Storage", "Tailwind CSS"],
      description:
        "Created a responsive expense management application with real-time tracking, categorization, and persistent local storage functionality for personal finance management.",

      liveLink:
        "https://expense-tracker-chi-nine-29.vercel.app/",

      codeLink:
        "https://github.com/harsh-pandey1489/expense-tracker",
    },
    
  ];

  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-24 px-6 lg:px-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Featured Projects & Real-World Applications
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl leading-relaxed">
            A collection of frontend and full-stack projects focused on
            responsive design, scalable architecture, API integration,
            and modern user experience development.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:border-cyan-400/40

                ${
                  project.featured
                    ? "lg:col-span-2"
                    : ""
                }
              `}
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full object-contain md:object-contain transition duration-700 group-hover:scale-105

                    
                  `}
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* TAG */}
                {project.featured && (
                  <div className="inline-flex mb-5 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm">
                    Featured Project
                  </div>
                )}

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-4">
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-[#0f172a] border border-white/10 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex md:flex-row flex-col gap-4 mt-8">

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn md:text-[16px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition duration-300"
                  >
                    Live Preview

                    <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition" />
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-cyan-500/10 transition duration-300"
                  >
                    Source Code

                    <FaGithub />
                  </a>

                </div>

              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 blur-3xl"></div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

