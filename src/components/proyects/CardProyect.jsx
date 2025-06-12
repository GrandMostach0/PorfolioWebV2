import React from "react";

import portadaDefault from "../../assets/portada.jpg"
import GitHub from "../icons/GitHub";

function CardProyects(Props){
    return(
        <div className="border-1 border-gray-500/10 my-2 mx-2 pb-6 rounded-xl overflow-hidden hover:border-neutral-600 hover:transition-all hover:ease-in hover:-translate-y-2">
            
            <img 
            src={Props.imagenUrl || portadaDefault} 
            alt={`Portada ${Props.titulo}`}
            loading="lazy"
            decoding="async"
            className="w-full h-50 object-cover object-center"
            />

            <div className="pt-2 px-6">
                <h2 className="text-2xl font-bold py-2">{Props.titulo}</h2>
                <p className="text-base text-pretty">{Props.descripcion}</p>

                <div className="flex items-center mt-3 flex-wrap">

                    {Props.tags.map((item, index) => (
                        <p key={index} className="tags">{item}</p>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">

                    {Props.urlGitHub && (
                        <a href={Props.urlGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-around border-1 border-black/40 dark:border-gray-50/20 py-2 px-2 rounded-[10px]  text-xs font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:text-white dark:hover:text-black">
                        <GitHub /> Código
                        </a>
                    )}

                    {Props.urlPreview && (
                        <a href={Props.urlPreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 py-2 px-2 rounded-[10px] text-xs border-neutral-700 dark:border-white/50 font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:text-white dark:hover:text-black">
                            Visualizar
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
}

export default CardProyects;