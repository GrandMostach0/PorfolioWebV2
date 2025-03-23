import React from "react";
import { useState } from "react";

function Tecnologias(){

    const opciones = ["fronted", "backend", "base de datos", "DevOps","ciberseguridad"]
    const [selection, setSelection] = useState(opciones[0]);

    return(
        <section className="my-20">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-2">Tecnologías</h2>
                <p className="text-gray-400 text-xl">Herramientas y tecnologías que utilizo en mi trabajo</p>

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
                <h3 className="text-2xl font-bold">FrontEnd</h3>
                <p className="text-gray-400">Tecnologías para crear interfaces de usuarios interactivas y responsivas</p>

                <div className="my-3 px-5 flex items-center">
                    <p className="tags">HTML5</p>
                    <p className="tags">CSS3</p>
                    <p className="tags">JavaScript</p>
                    <p className="tags">React</p>
                    <p className="tags">Tailwind CSS</p>
                </div>

            </div>
        </section>
    );
}

export default Tecnologias;