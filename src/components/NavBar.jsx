import React, { useState } from "react";
import LogoPersonal from "./icons/LogoPersonal";

/* Librería de scroll */
import { Link } from "react-scroll";

function NavBar() {

    return(
        <header className="text-white flex items-center justify-around sticky top-0 z-40 fade-scroll py-2 px-6">
            <div className="">
                <a href="#">
                    <LogoPersonal />
                </a>
            </div>

            <nav className="flex flex-wrap gap-4">
                <Link to="inicio" smooth={true} duration={500} className="block lg:inline hover:scale-105"> Inicio </Link>
                <Link to="experiencia" smooth={true} duration={500} offset={-60} className="block lg:inline hover:scale-105"> Experiencia </Link>
                <Link to="proyectos" smooth={true} duration={500} offset={-60} className="block lg:inline hover:scale-105"> Proyectos</Link>
                <Link to="tecnologias" smooth={true} duration={500} offset={-60} className="block lg:inline hover:scale-105"> Tecnologías </Link>
                <a href="#" className="block lg:inline hover:scale-105">Contacto</a>
                <a href="#" className="block lg:inline hover:scale-105">C/O</a>
            </nav>

        </header>
    );
}

export default NavBar;