import React, { useEffect, useState } from "react";
import profile from "../assets/profile-pic.jpg";
import resume from "../assets/HpResume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaReact,
} from "react-icons/fa";

import {
  HiOutlineDownload,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { motion } from "framer-motion";

const Home = () => {
  const roles = [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Full Stack Learner",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 40 : 90;

    const timer = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1000);
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <section
      id="home"
      className=" pt-10 bg-[#050816] text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-20 md:pb-0 pb-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6 backdrop-blur-md">
            <FaReact className="animate-spin-slow" />
            Building Modern Web Experiences
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Harsh Pandey
            </span>
          </h1>

          {/* Typing Role */}
          <div className="h-16 mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              {text}
              <span className="text-cyan-400 animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className=" text-gray-400 text-lg leading-relaxed max-w-2xl">
            Frontend Developer focused on building fast, responsive, and scalable web applications using React.js, Next.js, Tailwind CSS, and JavaScript. Experienced in developing modern UI components, integrating APIs, and creating seamless user experiences through clean and maintainable code.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="group px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-black font-semibold flex items-center gap-2"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href={resume}
              download
              className="px-7 py-3 rounded-xl border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
            >
              Download Resume
              <HiOutlineDownload size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">

            <div className="relative overflow-hidden rounded-2xl p-[1px]">
              <div className="border-glow"></div>

              <div className="relative bg-[#0f172a] flex items-center backdrop-blur-lg p-5 rounded-2xl h-full">
                <div className="flex items-center gap-2 text-gray-400">
                  <HiOutlineLocationMarker size={20} />
                  New Delhi
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-[1px]">
              <div className="border-glow"></div>

              <div className="relative bg-[#0f172a] backdrop-blur-lg p-5 rounded-2xl h-full">
                <h3 className="text-3xl font-bold text-cyan-400">1+</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Internship Experience
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-[1px]">
              <div className="border-glow"></div>

              <div className="relative bg-[#0f172a] flex items-center justify-around backdrop-blur-lg p-5 rounded-2xl h-full">
                <a
                  href="https://github.com/harsh-pandey1489"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <FaGithub size={22} />
                </a>


                <a
                  href="https://www.linkedin.com/in/harsh-pandey-10b670253/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>



          </div>



        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center items-center md:pb-25"
        >

          {/* BACKGROUND BLUR */}
          <div className="absolute  rounded-full bg-cyan-500/20 blur-[120px]"></div>

          {/* MAIN CONTAINER */}
          <div className="relative group">

            {/* ANIMATED BORDER */}
            <div className="absolute -inset-[3px] rounded-[40px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70 blur-sm group-hover:blur-md transition duration-500"></div>

            {/* IMAGE CARD */}
            <div className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] md:w-[420px] md:h-[500px] rounded-[40px] overflow-hidden bg-[#0b1120] border border-white/10 backdrop-blur-xl">

              {/* IMAGE */}
              <img
                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1779987146/port-img_jdn1xa.jpg"
                alt="Harsh Pandey"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>

            </div>

            {/* FLOATING EXPERIENCE CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -left-8 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl"
            >
              <p className="text-gray-400 text-sm">
                Experience
              </p>

              <h3 className="text-cyan-400 text-2xl font-bold">
                2+ Months
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Frontend Development
              </p>
            </motion.div>

            {/* FLOATING TECH CARD */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-6 -right-8 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 px-5 py-4 rounded-2xl shadow-xl"
            >
              <p className="text-gray-400 text-sm mb-1">
                Specialized In
              </p>

              <h4 className="text-cyan-400 font-semibold">
                React • Next.js
              </h4>
            </motion.div>

          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Home;
