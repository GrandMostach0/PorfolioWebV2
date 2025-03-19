import React from 'react';
import { useState } from 'react';

function Portafolio(){
    const [selection, setSelection] = useState("programacion");

    return(
        <section className="border-1">

            <div className="text-center text-white">
                <h2 className="text-5xl font-bold">Mis Proyectos</h2>
                <p className="text-gray-400 mt-2">
                    Explora mi trabajo en desarrollo de software y ciberseguridad
                </p>

                <div className="mt-6 inline-flex bg-white/20 rounded-lg p-1">
                    <button
                        className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                            selection === "programacion" ? "bg-black text-white" : "text-gray-400"
                        }`}
                        onClick={() => setSelection("programacion")}
                    >
                        Programación
                    </button>

                    <button
                        className={`px-4 py-2 gap-2 rounded-lg cursor-pointer transition-all ${
                            selection === "ciberseguridad" ? "bg-black text-white" : "text-gray-400"
                        }`}
                        onClick={() => setSelection("ciberseguridad")} // Aquí estaba el error
                    >
                        Ciberseguridad
                    </button>
                </div>
            </div>


        </section>
    );
}

export default Portafolio;