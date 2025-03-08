import React from "react";

import FotoPersonal from '../assets/FotoPersonal.jpg'

import GitHub from './icons/GitHub';
import LinkedIn from "./icons/LinkedIn";
import Behance from "./icons/Behance";
import Row_Right_Down from "./icons/Row_Right_Down";

function Inicio() {
    return(
        <div className=" text-white flex items-center justify-center overflow-hidden">
            <div className=" mr-7 w-2xl py-4 px-4">
                <h1 className="font-bold text-5xl mb-2">Desarrollador Frontend & Ciberseguridad</h1>
                <p className="text-base">Soy un apasionado del desarrollo web y la ciberseguridad. Listo para explorar y crecer en esta apasionante travesía.</p>

                <div className="flex items-center">
                    <a href="" className="bg-white text-black text-sm py-2 px-2 rounded-xl mr-2 flex items-center">Ver Proyectos <Row_Right_Down /> </a>

                    <a href="https://github.com/GrandMostach0" className=" py-2 px-2 border-1 border-gray-300/50 rounded-3xl mr-2"> <GitHub /> </a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/"className=" py-2 px-2 border-1 border-gray-300/50 rounded-3xl mr-2"><LinkedIn /></a>
                    <a href="https://www.behance.net/Victor_Chan" className=" py-2 px-2 border-1 border-gray-300/50 rounded-3xl"><Behance /></a>

                </div>



            </div>

            <div className="max-w-[15%] max-h-[20%] rounded-full overflow-hidden">
                <img src={FotoPersonal} alt="Foto personal" className="object-cover w-full h-full" />
            </div>


        </div>
    );
}

export default Inicio;