import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import FotoPersonal from '../assets/FotoPersonal.jpg'

import GitHub from './icons/GitHub';
import LinkedIn from "./icons/LinkedIn";
import Behance from "./icons/Behance";
import Row_Right_Down from "./icons/Row_Right_Down";

function Inicio() {
    return(
        <motion.idv initial={{ y: -50, opacity: 0}} animate={{ y:50, opacity: 1}} transition={{duration: 1}}
        id="inicio"
        className="flex items-center justify-center h-[70vh]">

            <div className=" mr-7 w-2xl py-4 px-4">
                <h1 className="font-bold text-5xl mb-5">Desarrollador Frontend & Ciberseguridad</h1>
                <p className="text-base">Soy un apasionado del desarrollo web y la ciberseguridad. Listo para explorar y crecer en esta apasionante travesía.</p>

                <div className="mt-5 flex items-center">

                    <a href="" className="bg-white text-black text-sm py-2 px-2 rounded-xl mr-6 hover:scale-105 hover:bg-gray-300">Ver Proyectos</a>

                    <a href="https://github.com/GrandMostach0" className="btn-redSocial"> <GitHub /> </a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/"className="btn-redSocial"> <LinkedIn /></a>
                    <a href="https://www.behance.net/Victor_Chan" className="btn-redSocial"> <Behance /></a>

                </div>



            </div>

            <div className="max-w-[15%] max-h-[50%] rounded-full overflow-hidden shadow-[0px_0px_20px_10px_#4a5568]">
                <img src={FotoPersonal} alt="Foto personal" className="object-cover w-full h-full"/>
            </div>

        </motion.idv>
    );
}

export default Inicio;