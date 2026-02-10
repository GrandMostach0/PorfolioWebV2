import React from "react";
import { motion } from "framer-motion";

import Work from "./icons/Work";

function Experiencia(){

    const Experiencia = [
        {
            id: 1,
            puesto: "Documentador Técnico /QA",
            empresa: "Efisys Core Banking",
            tiempo: "Noviembre 2024- Mayo 2025",
            descripcion: "Encargado de la documentación técnica, elaboración de manuales para desarrolladores y usuarios final. Registro de procesos internos. Apoyo en tareas de QA, realizando pruebas funcionales y de regresión para asegurar la calidad del software, documentando hallazgos y colaborando en la mejora continua del sistema."
        },
        {
            id: 2,
            puesto: "Desarrollador FullStack",
            empresa: "Kluge Labs",
            tiempo: "Agosto 2024 - Enero 2025",
            descripcion: "Desarrollé una plataforma web para la creación de un catálogo cultural, permitiendo a actores y escuelas de Arte y Cultura publicar sus obras, implemente funcionalidades para la gestión de perfiles, eventos y la integración con AWS para el alojamiento. Además, diseñe la arquitectura del proyecto, asegurando su escalabilidad y facilidad de uso."
        },
        {
            id: 3,
            puesto: "Soporte Técnico (Servicio Social)",
            empresa: "Instituto Tecnológico de Mérida",
            descripcion: "Encagargado del area y gestion de inventario de comput, configuracion de equipos y programas, mantenimiento preventivos de los equipos y apoyo a docentes.",
        },
        {
            id: 4,
            puesto: "Deserrollador Frontend",
            empresa: "Navegantes",
            descripcion: "Responsable de realizar el desarrollo Fronted utilizando técnologias de PHP (CodeIgniter4) y Bootstrap5, también estube de apoyo en la parte de backend.",
        }
    ]

    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="experiencia"
            className="overflow-auto py-5"
        >
            <div className="text-center mb-4">
                <h2 className="titulos">Experiencia</h2>
            </div>

            {Experiencia.map((xp) => (
                <div key={xp.id} className="border-l-1 border-gray-400 px-5 py-2 lg:w-[60%] md:w-screen m-auto relative before:absolute before:content-[''] before:bg-neutral-500 dark:before:bg-neutral-100 before:w-4 before:h-4 before:rounded-full before:top-4 before:-left-2 ">
                    <h2 className="text-base font-bold md:text-2xl">{xp.puesto}</h2>
                    <p className="font-bold text-sm md:text-base text-neutral-600 dark:text-white/90">{xp.empresa}</p>
                    <p className="text-sm md:text-sm  dark:text-white/90">{xp.tiempo}</p>
                    <p className="texto">{xp.descripcion}</p>
                </div>
            ))}
        </motion.div>
    );
}

export default Experiencia;