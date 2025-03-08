import React from "react";
import LogoPersonal from '../assets/LogoPersonal.svg';

function NavBar() {
    return(
        <header className="text-white flex items-center justify-around py-1">
            <div className="">
                <img src={LogoPersonal} alt="Logo Personal" />
            </div>

            <nav className="no-underline">
                <a href="" className="ml-4">Inicio</a>
                <a href="" className="ml-4">Experiencia</a>
                <a href="" className="ml-4">Proyectos</a>
                <a href="" className="ml-4">Tecnologías</a>
                <a href="" className="ml-4">Contacto</a>
                <a href="" className="ml-4">C/O</a>
            </nav>

        </header>
    );
}

export default NavBar;