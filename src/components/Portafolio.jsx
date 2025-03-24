import React, { useEffect } from 'react';
import { useState } from 'react';

import CardProyects from './proyects/cardProyects';

import DataProyects from '../json/DataProyects.json'
function Portafolio(){
    const menuPortafolio = Object.keys(DataProyects);

    const [seleccion, setSeleccion] = useState(menuPortafolio[0]);

    return(
        <section className="m-auto">

            <div className="text-center text-white py-5">
                <h2 className="text-5xl font-bold">Mis Proyectos</h2>
                <p className="text-gray-400 mt-2">
                    Explora mi trabajo en desarrollo de software y ciberseguridad
                </p>

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
                    DataProyects[seleccion].map((proyecto) => (
                        <CardProyects key={proyecto.id} {...proyecto} />
                    ))
                ) : (
                    <p className="text-white text-center col-span-3">No hay proyectos en esta categoría.</p>
                )}
            </div>

        </section>
    );
}

export default Portafolio;