import React, { useState, useEffect, useRef } from "react";
import LogoPersonal from "./icons/LogoPersonal";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Para animaciones

function NavBar() {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
 
  const opcionesMenu = ["inicio", "acerca", "experiencia", "proyectos", "tecnologias"];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animaciones
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    },
    closed: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    open: { opacity: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <header className="font-Releway text-neutral-900 dark:text-neutral-100 flex items-center justify-between sticky top-0 z-50 py-4 px-6 fade-scroll font-bold">
      <div className="z-50">
        <a href="#">
          <LogoPersonal />
        </a>
      </div>

      <button
        className="lg:hidden focus:outline-none z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay para móviles */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 lg:hidden z-40"
          />
        )}
      </AnimatePresence>

      <div ref={menuRef} className="hidden lg:block">
        <nav className="flex items-center gap-8">
          {opcionesMenu.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-90}
              className="relative group hover:text-primary-300 transition-colors cursor-pointer px-2 rounded-lg hover:bg-sky-100 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

            <a
              href="#"
              className="px-2 py-1 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors border-1 border-neutral-950 dark:border-neutral-100 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Ver CV
            </a>

          <a 
            href="mailto:kreedlegend@gmail.com"
            className="px-2 py-1 bg-primary-500 rounded-lg hover:bg-primary-600 transition bg-neutral-900 dark:bg-slate-100 text-neutral-100 dark:text-neutral-900 font-bold hover:scale-110 ease-out duration-200 "
          >
            Contacto
          </a>

          <button
          onClick={toggleTheme}
          className="border-1 bg-slate-950/50 dark:bg-neutral-100/50 cursor-pointer rounded-full w-[45px] h-[45px] transition all ease-in">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="text-neutral-950 dark:text-neutral-100 fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8
            g-[rgb(0,0,0,0.8)] bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(0,0,0,0.96)] backdrop-blur-lg text-center w-screen h-screen px-6 pt-24 pb-8 lg:hidden"
          >
            {opcionesMenu.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-2xl font-bold hover:text-primary-400 transition-colors w-[100%] cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            <a
              href="#"
              className="px-2 py-1 bg-primary-500 rounded-lg text-lg hover:bg-primary-600 transition-colors border-1 border-neutral-950 dark:border-neutral-100 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Ver CV
            </a>

            <a
              href="mailto:kreedlegend@gmail.com"
              className="mt-4 px-6 py-3 bg-primary-500 rounded-lg text-lg hover:bg-primary-600 transition-colors border-1 bg-neutral-950 dark:bg-neutral-100 font-bold text-neutral-100 dark:text-neutral-950 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
             Contacto
            </a>

            <button
            onClick={toggleTheme}
            className="border-1 border-neutral-950/50 dark:border-neutral-50/50 cursor-pointer rounded-full w-[45px] h-[45px] text-black hover:bg-gray-400 transition all ease-in">
              {theme === "light" ? "🌙" : "☀️"}
            </button>

          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;