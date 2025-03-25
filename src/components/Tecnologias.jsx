import React from 'react';
import { Element } from 'react-scroll';
import { useState } from 'react';
import Herramientas from '../json/Herramientas.json';
import { motion } from 'framer-motion';

function Tecnologias(){

    const opciones = ["fronted", "backend", "base de datos", "DevOps"]
    const [selection, setSelection] = useState(opciones[0]);

    const tecnologiaSeleccionada = Herramientas.find(item => item.tag === selection);

    return(
        <Element name="tecnologias" className="my-20">
            <div className="text-center">
                <motion.div
                initial={{opacity: 0, y:50}}
                whileInView={{y: 0,opacity: 1}}
                transition={{duration: 0.5, delay: 0.6}}>
                    <h2 className="text-5xl font-bold mb-2">Tecnologías</h2>
                    <p className="text-gray-400 text-xl">Herramientas y tecnologías que utilizo en mi trabajo</p>
                </motion.div>

                <div className="my-5 inline-flex bg-white/20 rounded-lg p-1">
                    {opciones.map((opcion) => (
                    <button
                        key={opcion}
                        className={`px-4 py-2 rounded-lg cursor-pointer transition-all mr-3 ${
                        selection === opcion ? "bg-black text-white" : "text-gray-400"
                        }`}
                        onClick={() => setSelection(opcion)}
                    >
                        {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                    </button>
                    ))}
                </div>

            </div>

            <div className=" w-[80%] m-auto border-1 border-white/50 mt-6 mb-7 py-5 px-6 rounded-2xl">
                <h3 className="text-2xl font-bold">{tecnologiaSeleccionada.nombreTecnologia}</h3>
                <p className="text-gray-400">{tecnologiaSeleccionada.descripcionTecnologia}</p>

                <div className="my-3 px-5 flex flex-wrap gap-2 ">

                    {tecnologiaSeleccionada.herramientasTecnologias.map((herramienta, index) => (
                        <p key={index} className="tags">{herramienta}</p>
                    ))}
                </div>

            </div>
        </Element>
    );
}

export default Tecnologias;