import React from "react";

import portada from "../../assets/portada.jpg"
import GitHub from "../icons/GitHub";

function CardProyects(Props){
    return(
        <div className="border-1 border-gray-500/50 my-2 mx-2 pb-6 rounded-xl overflow-hidden hover:border-white/60 hover:transition-all hover:ease-in hover:-translate-y-2">

            <img src={portada} alt="Portada Card" className=""/>

            <div className="pt-2 px-6">
                <h2 className="text-2xl font-bold py-2">{Props.titulo}</h2>
                <p>{Props.descripcion}</p>

                <div className="flex items-center mt-3">

                    {Props.tags.map((item, index) => (
                        <p key={index} className="tags">{item}</p>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <a href="" className="flex items-center justify-around border-1 border-gray-50/20 py-2 px-2 rounded-[10px] hover:bg-gray-50/50 text-xs">
                        <GitHub /> Código
                    </a>
                    <a href="https://www.google.com/" target="_blank" className="py-2 px-2 rounded-[10px] bg-white text-gray-700 text-xs">
                        Ver Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardProyects;