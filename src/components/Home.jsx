import React from "react";
import imge from "../assets/profile-pic.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FaDotCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import resume from "../assets/harsh_resume.pdf";
import { GoDownload } from "react-icons/go";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect } from "react";
const Home = () => {
  const [active, setActive] = useState(false);
  
const words = [
  "Harsh Pandey",
  "a Frontend Developer",
  "a React Developer",
  "a Web Enthusiast"
];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]); 

  return (
    <div
      name="home"
      className="min-h-screen bg-gray-950 grid grid-cols-1 lg:grid-cols-2 "

    >
      {/* 🔵 IMAGE SECTION (TOP on mobile, RIGHT on desktop) */}
      <motion.div 
       initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 1, ease: "easeOut" }}
      className="order-1 lg:order-2 w-full h-full flex justify-center items-center pt-24 lg:pt-0">
       <div className="flex justify-center items-center bg-gray-800 w-[300px] h-[300px] rounded-2xl cursor-pointer  transition-transform duration-400 ">
  
  {/* Gradient glow */}
  <div className="w-[260px] h-[260px] rounded-full hover:scale-110 transition-transform duration-400
                  bg-gradient-to-r from-[rgb(20,193,208)] to-white 
                  flex justify-center items-center">

    {/* Image container */}
    <div className="w-[240px] h-[240px] rounded-full overflow-hidden bg-white">
      <img
        src={imge}
        className=" scale-220 mt-15 ml-[-10px] object-cover"
        alt=""
      />
    </div>

  </div>

</div>

      </motion.div>

      {/* 🟢 CONTENT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 1, ease: "easeOut" }}
      className="order-2 lg:order-1 w-full h-full flex flex-col justify-center px-6 lg:pl-30 pt-10 border-b-4">

        <h1 
        className="text-3xl md:text-4xl font-bold text-white">
          Hi, I’m <span className="text-cyan-300 font-semibold">
      {text}
      <span className="animate-pulse">|</span></span>
        </h1>

        <p className="subtitle text-gray-400 mt-4 max-w-xl">
          I build modern, responsive, and user-friendly web applications using
          React, Next.js, Tailwind CSS, and JavaScript. Passionate about clean
          code, performance, and continuous learning.
        </p>
        <a
          href={resume}
          download
           className=" md:hidden mt-6 w-[180px] flex items-center gap-2 px-5 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          Download CV <GoDownload />
        </a>

        {/* INFO */}
        <div className="flex flex-col gap-5 pt-7 mt-6">
          <div className="flex items-center gap-4">
            <a href="https://www.google.com/maps/place/Crowne+Plaza+New+Delhi+Okhla+by+IHG/@28.5288244,77.2721515,17z/data=!3m1!4b1!4m9!3m8!1s0x390ce15baccb7905:0x5482910020112402!5m2!4m1!1i2!8m2!3d28.5288244!4d77.2721515!16s%2Fg%2F1tp8yf3n?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" className="text-2xl text-white">
              <CiLocationOn />
            </a>
            <span className="subtitle-semibold text-gray-300">
              Delhi Okhla Phase 1
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-green-400 ml-1">
              <FaDotCircle />
            </span>
            <span className="subtitle-semibold text-gray-300">
              Available for new projects
            </span>
          </div>
        </div>

        {/* 🔗 SOCIAL ICONS */}
        <div className="flex gap-6 mt-7">
          <a
            href="https://github.com/harsh-pandey1489"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 p-[2px] rounded-full bg-gradient-to-r from-gray-500 to-gray-500 hover:from-pink-500 hover:to-purple-500 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:scale-110 transition">
              <FaGithub size={22} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-pandey-10b670253/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 p-[2px] rounded-full bg-gradient-to-r from-gray-500 to-gray-500 hover:from-sky-500 hover:to-blue-600 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:scale-110 transition">
              <FaLinkedin size={22} />
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
