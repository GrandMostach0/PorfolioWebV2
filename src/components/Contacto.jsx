import React from "react";
import { motion } from "framer-motion";

function Contacto() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center my-10 py-10 w-[100%] sm:w-[60%] lg:w-[40%] m-auto text-pretty"
        >
            <h1 className="text-4xl sm:text-6xl font-bold">Hablemos de tu Proyecto</h1>
            <p className="text-xl text-gray-400 mt-5 mb-10">¿Tienes un proyecto en mente? Contáctame y hablemos sobre cómo puedo ayudarte.?</p>

            <a className="border-1 px-2 py-2 rounded-lg hover:scale-110 hover:bg-sky-50 hover:text-black hover:font-semibold transition ease-in duration-300" href="mailto:kreedlegend@gmail.com" target="_blank">Contacto</a>
        </motion.div>
    );
}

export default Contacto;