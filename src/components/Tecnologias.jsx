import React from 'react';
import { Element } from 'react-scroll';
import { useState } from 'react';
import Herramientas from '../json/Herramientas.json';
import { motion } from 'framer-motion';

function Tecnologias(){

    const opciones = ["fronted", "backend", "base de datos", "DevOps", "Ciberseguridad"]
    const [selection, setSelection] = useState(opciones[0]);

    const tecnologiaSeleccionada = Herramientas.find(item => item.tag === selection);

    return(
        <Element id="tecnologias" className="my-20">
            <div className="text-center">
                <motion.div
                initial={{opacity: 0, y:50}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.6}}>
                    <h2 className="titulos">Tecnologías</h2>
                    <p className="descripcionTitulo">Herramientas y tecnologías que utilizo en mi trabajo</p>
                </motion.div>

                <div className="my-4 w-[100%] sm:w-auto inline-flex bg-black/30 dark:bg-white/20 rounded-lg p-1 overflow-auto">
                    {opciones.map((opcion) => (
                    <button
                        key={opcion}
                        className={`min-w-[120px] px-2 py-1 sm:px-4 sm:py-2 rounded-lg cursor-pointer transition-all mr-3 ${
                        selection === opcion ? "bg-black text-white" : "text-neutral-100"
                        }`}
                        onClick={() => setSelection(opcion)}
                    >
                        {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                    </button>
                    ))}
                </div>

            </div>

            <div className=" w-[80%] m-auto border-1 border-neural-950/50 dark:border-neutral-300/50 mt-6 mb-7 py-5 px-6 rounded-2xl">
                <h3 className="text-3xl font-bold">{tecnologiaSeleccionada.nombreTecnologia}</h3>
                <p className="font-semibold text-neutral-500 dark:text-neutral-400">{tecnologiaSeleccionada.descripcionTecnologia}</p>

                <div className="my-1 md:my-3 md:px-5 flex flex-wrap">

                    {tecnologiaSeleccionada.herramientasTecnologias.map((herramienta, index) => (
                        <p key={index} className="tags">{herramienta}</p>
                    ))}
                </div>

            </div>
        </Element>
    );
}

export default Tecnologias;