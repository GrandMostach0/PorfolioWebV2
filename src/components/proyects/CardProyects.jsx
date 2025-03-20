import React from "react";

import portada from "../../assets/portada.jpg"
import GitHub from "../icons/GitHub";

function CardProyects(props){
    return(
        <div className="border-1 border-gray-500/50 my-2 mx-2 rounded-xl overflow-hidden">

            <img src={portada} alt="Portada Card" className=""/>

            <div className="pt-2 px-5 pb-3">
                <h2 className="text-2xl font-bold py-2">Titulo</h2>
                <p>Plataforma de comercio electrónico con carrito de compras, pagos y gestión de inventario.</p>

                <div className="mt-6 flex items-center justify-between">
                    <a href="" className="flex items-center justify-around border-1 border-gray-50/20 py-2 px-2 rounded-[10px]">
                        <GitHub /> Código
                    </a>
                    <a href="https://www.google.com/" target="_blank" className="py-2 px-2 rounded-[10px] bg-white text-gray-700">
                        Ver Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardProyects;