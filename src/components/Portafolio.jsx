import React, { useEffect } from 'react';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import CardProyects from './proyects/CardProyect';

import DataProyects from '../json/DataProyects.json'
function Portafolio(){
    const menuPortafolio = Object.keys(DataProyects);
    const [seleccion, setSeleccion] = useState(menuPortafolio[0]);

    //* zona de la páginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] =  useState(6);

    const updateProjectsPerPage = () => {
        if(window.innerWidth >= 1024){
            setProjectsPerPage(6);
        } else if (window.innerWidth >= 640){
            setProjectsPerPage(4);
        } else {
            setProjectsPerPage(3)
        }
        setProjectsPerPage(window.innerWidth >= 640 ? 6 : 3);
    }

    useEffect(() => {
        updateProjectsPerPage();
        window.addEventListener("resize", updateProjectsPerPage);
        return () => window.removeEventListener("resize", updateProjectsPerPage);
    })

    const proyectos = DataProyects[seleccion] || [];
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const proyectoPaginados = proyectos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(proyectos.length  / projectsPerPage);

    return(
        <Element id="proyectos" className="m-auto">

            <div className="text-center text-white py-5">

                <motion.div
                initial={{opacity: 0, y:50}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.6}}>
                    <h2 className="titulos">Mis Proyectos</h2>
                    <p className="descripcionTitulo">
                        Explora mi trabajo en desarrollo de software y ciberseguridad
                    </p>
                </motion.div>

                <div className="mt-6 inline-flex bg-white/20 rounded-lg p-1">
                    {menuPortafolio.map((opcion) => (
                        <button
                            key={opcion}
                            className={`px-2 py-1 sm:px-4 sm:py-2 rounded-lg cursor-pointer transition-all ${
                                seleccion  === opcion ? "bg-black text-white" : "text-gray-400"
                            }`}
                            onClick={() => setSeleccion(opcion)}
                        >
                            {opcion}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {proyectoPaginados.length > 0 ? (
                    proyectoPaginados.map((proyecto, index) => (
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

            {totalPages > 1 && (
                <div className="flex items-center justify-center">
                    <button
                        className={`px-3 py-1 rounded-lg ${currentPage  === 1 ? "bg-gray-600 cursor-not-allowed" : "cursor-pointer"}`}
                        disabled = {currentPage === 1}
                        onClick={() => setCurrentPage (currentPage - 1)}
                    >
                        Anterior
                    </button>

                    <span>
                        Página {currentPage} de {totalPages}
                    </span>

                    <button
                        className={`px-3 py-1 rounded-lg ${currentPage == totalPages ? "bg-gray-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 cursor-pointer"}`}
                        disabled = {currentPage == totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        siguiente
                    </button>

                </div>
            )}

        </Element>
    );
}

export default Portafolio;