import  { useEffect } from 'react';
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

    useEffect (() => {
        setCurrentPage(1);
    }, [seleccion])

    const proyectos = DataProyects[seleccion] || [];
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const proyectoPaginados = proyectos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(proyectos.length  / projectsPerPage);

    return(
        <Element id="proyectos" className="m-auto">

            <div className="text-center py-5 mt-10 md:mt-25">

                <motion.div
                initial={{opacity: 0, y:50}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.6}}>
                    <h2 className="titulos">Mis Proyectos</h2>
                    <p className="descripcionTitulo">
                        Explora los proyecos que he trabajado 👀
                    </p>
                </motion.div>

                <div className="mt-6 inline-flex bg-black/30 dark:bg-white/20 rounded-lg p-1">
                    {menuPortafolio.map((opcion) => (
                        <button
                            key={opcion}
                            className={`px-2 py-1 sm:px-4 sm:py-2 rounded-lg cursor-pointer transition-all ${
                                seleccion  === opcion ? "bg-black text-white" : "text-neutral-100"
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
                    <p className="text-center col-span-3">No hay proyectos en esta categoría.</p>
                )}
            </div>

            {totalPages > 1 && (
                <motion.div
                    initial={{opacity: 0, y:50}}
                    whileInView={{y: 0,opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-5 flex items-center justify-center
                ">
                    <button
                        className={`mr-3 px-2 py-1 rounded-lg ${currentPage  === 1 ? "bg-transparent" : "cursor-pointer border-1 hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black hover:font-semibold"}`}
                        disabled = {currentPage === 1}
                        onClick={() => setCurrentPage (currentPage - 1)}
                    >
                        Anterior
                    </button>

                    <span>
                        Página {currentPage} de {totalPages}
                    </span>

                    <button
                        className={`ml-3 px-2 py-1 rounded-lg ${currentPage == totalPages ? "bg-transparent" : "cursor-pointer border-1 hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black hover:font-semibold"}`}
                        disabled = {currentPage == totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        siguiente
                    </button>

                </motion.div>
            )}

        </Element>
    );
}

export default Portafolio;