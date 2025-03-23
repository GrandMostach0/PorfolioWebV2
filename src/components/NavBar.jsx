import React, { useState } from "react";
import LogoPersonal from '../assets/LogoPersonal.svg';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="text-white flex items-center justify-around sticky top-0 z-40 fade-scroll py-2 px-6">
            <div className="">
                <img src={LogoPersonal} alt="Logo Personal" />
            </div>

            <button
                className="lg:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "si": "no"}
            </button>

            <nav className={`lg:flex space-x-6 transition-all duration-300 ${isOpen ? "block absolute top-12 left-0 w-full bg-black p-4 text-center" : "hidden"}`}>
                <a href="#" className="block lg:inline">Inicio</a>
                <a href="#" className="block lg:inline">Experiencia</a>
                <a href="#" className="block lg:inline">Proyectos</a>
                <a href="#" className="block lg:inline">Tecnologías</a>
                <a href="#" className="block lg:inline">Contacto</a>
                <a href="#" className="block lg:inline">C/O</a>
            </nav>

        </header>
    );
}

export default NavBar;