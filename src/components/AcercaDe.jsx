import React from "react";
import { motion } from "framer-motion";

function AcercaDe() {
    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-30 pt-10 sm:mt-20 mb-20"
            id="acerca"
        >
            <h1 className="titulos text-center">Sobre mí</h1>
            <div className="my-5 pt-5 w-[100%] lg:w-[40%] m-auto text-base sm:text-lg text-pretty">
            <p>Hola 👋, soy Victor, recién egresado de <span className="font-bold">Ingeniería en Sistemas Computacionales</span>.</p>
            <p>Me apasionan el <span className="font-bold">desarrollo web</span> y la <span className="font-bold">Ciberseguridad</span>. He trabajado en un proyecto donde expandí mis conocimientos y adquirí experiencia práctica. Actualmente, sigo reforzando mis habilidades para crecer profesionalmente.</p>
            <p>Me motiva estar en <span className="font-bold">constante aprendizaje</span> y mantenerme actualizado con las últimas tecnologías.</p>
            </div>
        </motion.div>
    );
}

export default AcercaDe;