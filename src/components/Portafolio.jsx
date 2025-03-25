import React, { useEffect } from 'react';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import CardProyects from './proyects/cardProyects';

import DataProyects from '../json/DataProyects.json'
function Portafolio(){
    const menuPortafolio = Object.keys(DataProyects);

    const [seleccion, setSeleccion] = useState(menuPortafolio[0]);

    return(
        <Element name="proyectos" className="m-auto">

            <div className="text-center text-white py-5">

                <motion.div
                initial={{opacity: 0, y:50}}
                whileInView={{y: 0,opacity: 1}}
                transition={{duration: 0.5, delay: 0.6}}>
                    <h2 className="text-5xl font-bold">Mis Proyectos</h2>
                    <p className="text-gray-400 mt-2">
                        Explora mi trabajo en desarrollo de software y ciberseguridad
                    </p>
                </motion.div>

                <div className="mt-6 inline-flex bg-white/20 rounded-lg p-1">
                    {menuPortafolio.map((opcion) => (
                        <button
                            key={opcion}
                            className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                                seleccion  === opcion ? "bg-black text-white" : "text-gray-400"
                            }`}
                            onClick={() => setSeleccion(opcion)}
                        >
                            {opcion}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {DataProyects[seleccion]?.length > 0 ? (
                    DataProyects[seleccion].map((proyecto, index) => (
                        <motion.div
                        key={proyecto.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                         <CardProyects {...proyecto} />
                        </motion.div>
                    ))
                ) : (
                    <p className="text-white text-center col-span-3">No hay proyectos en esta categoría.</p>
                )}
            </div>

        </Element>
    );
}

export default Portafolio;