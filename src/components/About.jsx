
import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

function About() {

  const skills = [
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#050816] text-white py-24 px-6 lg:px-20"
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
            About Me
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Building modern web experiences with clean UI,
            scalable frontend architecture, and seamless user interactions.
          </h2>

          <p className="mt-8 text-gray-400 md:text-lg leading-relaxed max-w-3xl">
            Frontend Developer specializing in React.js and Next.js with
            hands-on internship experience building responsive and scalable web
            applications. Passionate about creating performant user interfaces,
            reusable components, API-driven applications, and modern digital
            experiences with clean code practices.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* EXPERIENCE CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300">

              <p className="text-cyan-400 text-sm mb-3 uppercase tracking-wider">
                Experience
              </p>

              <h3 className="text-2xl font-semibold">
                Frontend Developer Intern
              </h3>

              <p className="text-gray-400 mt-2">
                Kushel Digi Solutions • 2026
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Worked on responsive client projects using React.js,
                Next.js, Tailwind CSS, and REST APIs while collaborating
                with developers and designers to improve user experience,
                performance, and frontend maintainability.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300">

              <p className="text-cyan-400 text-sm mb-3 uppercase tracking-wider">
                Education
              </p>

              <div className="space-y-7">

                <div>
                  <h3 className="text-xl font-semibold">
                    Master of Computer Applications
                  </h3>

                  <p className="text-gray-400 mt-1">
                    AKTU University • 2024 - 2026
                  </p>

                  <p className="text-gray-500 mt-2">
                    CGPA: 8.42
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    B.Sc. Mathematics
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Siddharth University • 2021 - 2024
                  </p>

                  <p className="text-gray-500 mt-2">
                    CGPA: 7.78
                  </p>
                </div>

              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl h-full">

              <p className="text-cyan-400 text-sm uppercase tracking-wider mb-10">
                Tech Stack
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="group bg-[#0f172a] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-400/50 transition duration-300 cursor-pointer"
                  >

                    <div className="text-4xl text-cyan-400 group-hover:scale-110 transition">
                      {skill.icon}
                    </div>

                    <p className="text-gray-300 font-medium">
                      {skill.name}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;

