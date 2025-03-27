import React from "react";

/* IMPORTE DE ICONOS */
import Location from './icons/Location'
import LinkedIn from './icons/LinkedIn'
import GitHub from './icons/GitHub'
import Behance from './icons/Behance'

function FooterBar() {

    return(
        <footer className="text-neutral-900 dark:text-neutral-100 mt-10 sm:mt-25 px-5 py-4 flex flex-col gap-5 sm:flex-row justify-around border-t-1 border-b-1 border-neutral-950/50 dark:border-neutral-100/50">
            
            <div className="text-sm">
                <h2 className="font-bold text-base mb-2">Victor B. Chan V.</h2>
                <p>Desarrollador Front-End y Ciberseguirdad, creando soluciones digitales segurad y eficientes.</p>
                <div className="flex items-center mb-3">
                    <Location /> <p className="ml-0.5">Mérida, Yucatán, México.</p>
                </div>
                <p><a href="tel:+529994552047">+52 9994552047</a> - <a href="mailto:kreedlegend@gmail.com">Kreedlegend@gmail.com</a></p>
            </div>

            <div className="text-sm">
                <h2 className="font-bold md:text-lg mb-2">Nagavegación</h2>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#tecnologias">Tecnologías</a></li>
                    <li><a href="mailto:kreedlegend@gmail.com">Contacto</a></li>
                </ul>
            </div>

            <div className="flex items-center justify-center sm:justify-start">
                <a href="https://github.com/GrandMostach0" className="mr-5 hover:scale-110 border-1 border-neutral-950/50 dark:border-neutral-100/50 py-1 px-1 rounded-lg" ><GitHub /></a>
                <a href="https://www.linkedin.com/in/victorchanvarguez/" className="mr-5 hover:scale-110 border-1 border-neutral-950/50 dark:border-neutral-100/50 py-1 px-1 rounded-lg" ><LinkedIn /></a>
                <a href="https://www.behance.net/Victor_Chan" className="hover:scale-110 border-1 border-neutral-950/50 dark:border-neutral-100/50 py-1 px-1 rounded-lg" ><Behance /></a>
            </div>
        </footer>
    );
}

export default FooterBar;