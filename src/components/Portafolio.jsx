import React from 'react';

function Portafolio(){

    return(
        <section className="border-1">

        <div className="text-center text-white">
            <h2 className="text-5xl font-bold">Mis Proyectos</h2>
            <p className="text-gray-400 mt-2">
                Explora mi trabajo en desarrollo de software y ciberseguridad
            </p>

            <div className="mt-6 inline-flex bg-neutral-800 rounded-lg p-1">
                <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg cursor-pointer">
                    Programación
                </button>
                <button className="px-4 py-2 text-gray-400 flex items-center gap-2 cursor-pointer">
                    Ciberseguridad
                </button>
            </div>
        </div>

        </section>
    );
}

export default Portafolio;