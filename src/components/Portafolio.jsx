import React, { useEffect } from 'react';
import { useState } from 'react';

import CardProyects from './proyects/cardProyects';

import DataProyects from '../json/DataProyects.json'
function Portafolio(){
    const [selection, setSelection] = useState("programacion");

    //apartado para mostrar los datos del json
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('../json/DataProyects.json')
        .then((response) => response.json())
        .then((json) => setData(json))
    },[]);

    return(
        <section className="w-[90%] m-auto">

            <div className="text-center text-white py-5">
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

            <div className="grid grid-cols-3 gap-4">
                <CardProyects />
                <CardProyects />
                <CardProyects />
                <CardProyects />
                <CardProyects />
                <CardProyects />
            </div>

        </section>
    );
}

export default Portafolio;