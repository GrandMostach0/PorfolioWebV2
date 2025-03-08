import React from "react";

function FooterBar() {

    return(
        <footer className="text-white border-1 border-white px-2 py-2 flex items-center justify-around">
            
            <div className="text-sm">
                <h2 className="font-bold text-base">Victor B. Chan</h2>
                <p>Desarrollador Front-End y Ciberseguirdad, creando soluciones digitales segurad y eficientes.</p>
                <img src="" alt="Icn-location"/> Mérida, Yuc, Méx.
            </div>

            <div className="text-sm">
                <h2 className="font-bold text-base">Nagavegación</h2>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Experiencia</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Tecnologías</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>

            <div className="text-sm">
                <img src="" alt="Icn-GitHub" />
                <img src="" alt="Icn-Linkedlin" />
                <img src="" alt="Icn-Behance"/>
            </div>
        </footer>
    );
}

export default FooterBar;