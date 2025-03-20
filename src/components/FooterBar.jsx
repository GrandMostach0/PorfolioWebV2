import React from "react";

/* IMPORTE DE ICONOS */
import Location from './icons/Location'
import LinkedIn from './icons/LinkedIn'
import GitHub from './icons/GitHub'
import Behance from './icons/Behance'

function FooterBar() {

    return(
        <footer className="text-white mt-7 px-2 py-2 flex items-center justify-around border-t-1 border-b-1 border-green-50/30">
            
            <div className="text-sm">
                <h2 className="font-bold text-base mb-2">Victor B. Chan</h2>
                <p>Desarrollador Front-End y Ciberseguirdad, creando soluciones digitales segurad y eficientes.</p>
                <div className="flex items-center">
                    <Location /> <p className="ml-0.5">Mérida, Yucatán, México.</p>
                </div>
            </div>

            <div className="text-sm">
                <h2 className="font-bold text-base mb-2">Nagavegación</h2>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Experiencia</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Tecnologías</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>

            <div className="flex items-center">
                <a href="https://github.com/GrandMostach0" className="mr-2" ><GitHub /></a>
                <a href="https://www.linkedin.com/in/victorchanvarguez/" className="mr-2" ><LinkedIn /></a>
                <a href="https://www.behance.net/Victor_Chan" className="mr-2" ><Behance /></a>
            </div>
        </footer>
    );
}

export default FooterBar;