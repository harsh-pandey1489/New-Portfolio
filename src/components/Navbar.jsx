import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GoDownload } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/HpResume.pdf";

const navLinks = [
  { id: 1, name: "Home", to: "home" },
  { id: 2, name: "About", to: "about" },
 
  { id: 3, name: "Projects", to: "projects" },
  { id: 4, name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll lock for mobile menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full h-[90px] z-50 px-8 flex justify-between items-center
        transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-black/40 shadow-md" : "bg-gray-950"}`}
      >
        <h2 className="text-gray-300 text-2xl font-bold">Portfolio</h2>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              smooth
              spy
              duration={500}
              activeClass="active-link"
              offset={-90}
            >
              <li className="cursor-pointer text-gray-400 hover:text-white transition subtitle">
                {item.name}
              </li>
            </Link>
          ))}

          <a
            href={resume}
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            Download CV <GoDownload />
          </a>
        </ul>

        {/* HAMBURGER */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-7 h-[3px] bg-white transition ${menuOpen && "rotate-45 translate-y-2"}`} />
          <span className={`w-7 h-[3px] bg-white transition ${menuOpen && "opacity-0"}`} />
          <span className={`w-7 h-[3px] bg-white transition ${menuOpen && "-rotate-45 -translate-y-2"}`} />
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" md:hidden fixed top-0 right-0 w-full h-screen bg-black/40 backdrop-blur-lg z-40
            flex justify-center items-center "
          >
            <ul className="flex flex-col gap-10 text-xl text-white ml-8 mb-26">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  spy
                  smooth={true}
                  duration={500}
                  offset={-90}
                  onClick={() => setMenuOpen(false)}
                  activeClass="active-link"
                >
                  <li className="cursor-pointer subtitle font-bold text-2xl ">{item.name}</li>
                </Link>
              ))}

              <a
                href={resume}
                download
                className="flex items-center gap-2 justify-center"
              >
                Download CV <GoDownload />
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
