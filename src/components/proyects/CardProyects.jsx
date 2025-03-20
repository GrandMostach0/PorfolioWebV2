import React from "react";

import portada from "../../assets/portada.jpg"
import GitHub from "../icons/GitHub";

function CardProyects(props){
    return(
        <div className="border-1 border-rose-600  my-2 mx-2">
            <img src={portada} alt="Portada Card" className=""/>
            <div className="border-1 pt-2 px-5 pb-3">
                <h2>Titulo</h2>
                <p>Plataforma de comercio electrónico con carrito de compras, pagos y gestión de inventario.</p>

                <div className=""></div>
                <div className="border-1">
                    <a href="">
                        <GitHub /> Código
                    </a>

                    <a href="">

                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardProyects;