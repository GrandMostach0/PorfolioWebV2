import React, { useState } from "react";
import LogoPersonal from '../assets/LogoPersonal.svg';

function NavBar() {

    return(
        <header className="text-white flex items-center justify-around sticky top-0 z-40 fade-scroll py-2 px-6">
            <div className="">
                <a href="#">
                    <img src={LogoPersonal} alt="Logo Personal" />
                </a>
            </div>

            <nav className="flex flex-wrap gap-4">
                <a href="#inicio" className="block lg:inline hover:scale-105">Inicio</a>
                <a href="#experiencias" className="block lg:inline hover:scale-105">Experiencia</a>
                <a href="#proyectos" className="block lg:inline hover:scale-105">Proyectos</a>
                <a href="#tecnologias" className="block lg:inline hover:scale-105">Tecnologías</a>
                <a href="#" className="block lg:inline hover:scale-105">Contacto</a>
                <a href="#" className="block lg:inline hover:scale-105">C/O</a>
            </nav>

        </header>
    );
}

export default NavBar;