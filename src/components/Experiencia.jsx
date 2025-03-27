import React from "react";
import { motion } from "framer-motion";

import Work from "./icons/Work";

function Experiencia(){

    const Experiencia = [
        {
            id: 1,
            puesto: "Documentador",
            empresa: "Efisys Core Banking",
            tiempo: "Actualmente....",
            descripcion: "Encargado de la documentación técnica, elaboración de manuales de usuarios final y registrando procesos internos. Además, apoyé en tareas de QA, realizando pruebas funcionales y de regresión para asegurar la calidad del software, documentando hallazgos y colaborando en la mejora continua del sistema."
        },
        {
            id: 2,
            puesto: "Desarrollador FullStack",
            empresa: "Cluge Labs",
            tiempo: "Septiembre 2024 - Enero 2025",
            descripcion: "Desarrollé una plataforma web para la creación de un catálogo cultural, permitiendo a actores y escuelas de Arte y Cultura publicar sus obras, implemente funcionalidades para la gestión de perfiles, eventos y la integración con AWS para el alojamiento. Además, diseñe la arquitectura del proyecto, asegurando su escalabilidad y facilidad de uso."
        },
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
            <div className="text-center mb-10">
                <h2 className="titulos">Experiencia</h2>
            </div>

            {Experiencia.map((xp) => (
                <div key={xp.id} className="border-l-1 border-gray-400 px-5 py-2 lg:w-[40%] md:w-screen m-auto relative before:absolute before:content-[''] before:bg-neutral-500 dark:before:bg-neutral-100 before:w-4 before:h-4 before:rounded-full before:top-4 before:-left-2 ">
                    <h2 className="text-base font-bold md:text-2xl">{xp.puesto}</h2>
                    <p className="font-bold text-sm md:text-base text-neutral-600 dark:text-neutral-400">{xp.empresa}</p>
                    <p className="text-sm md:text-sm text-neutral-600 dark:text-neutral-400">{xp.tiempo}</p>
                    <p className="md:font-semibold text-base sm:text-base md:text-base lg:text-lg mt-3 text-pretty text-neutral-600 dark:text-neutral-400">{xp.descripcion}</p>
                </div>
            ))}
        </motion.div>
    );
}

export default Experiencia;