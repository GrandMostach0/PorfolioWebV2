import React from "react";
import { motion } from "framer-motion";

import FotoPersonal from '../assets/FotoPersonal.jpg'

import GitHub from './icons/GitHub';
import LinkedIn from "./icons/LinkedIn";
import Behance from "./icons/Behance";
import Row_Right_Down from "./icons/Row_Right_Down";

function Inicio() {
    return(
        <motion.idv initial={{ y: -50, opacity: 0}} animate={{ y:50, opacity: 1}} transition={{duration: 1, delay: 0.2}}
        id="inicio"
        className="flex flex-col-reverse items-center justify-center lg:flex-row md:flex-row sm:flex-row h-[70vh]">

            <div className="w-[100%] md:w-[100%] lg:w-[40%] mx-auto lg:m-0 lg:mr-15 py-4 px-2 md:px-4 text-center md:text-left lg:text-left">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl sm:text-left lg:text-6xl mb-2 md:mb-5">Desarrollador Frontend & Ciberseguridad</h1>
                <p className="text-xl">Soy un apasionado del desarrollo web y la ciberseguridad. Listo para explorar y crecer en esta apasionante travesía.</p>

                <div className="mt-5 flex items-center justify-center sm:justify-start md:justify-start lg:justify-start">

                    <a href="" className="text-neutral-100 dark:text-neutral-900 font-extrabold text-sm py-2 px-4 rounded-xl mr-6 hover:scale-105 dark:bg-neutral-100 bg-neutral-950">Ver CV</a>

                    <a href="https://github.com/GrandMostach0" target="_blank" className="btn-redSocial"> <GitHub /> </a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/" target="_blank" className="btn-redSocial"> <LinkedIn /></a>
                    <a href="https://www.behance.net/Victor_Chan" target="_blank" className="btn-redSocial"> <Behance /></a>

                </div>



            </div>

            <div className="w-[150px] h-[175px] sm:w-[210px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden shadow-[0px_0px_25px_5px_#ac77c633]">

                <img
                    loading="lazy"
                    decoding="async"
                    src={FotoPersonal}
                    alt="Foto personal"
                    className="object-cover w-full h-full
                "/>
                
            </div>

        </motion.idv>
    );
}

export default Inicio;