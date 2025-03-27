import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* SECCION DE IMPORTACIONES */
import FooterBar from './components/FooterBar'

import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Experiencia from './components/Experiencia'
import Portafolio from './components/Portafolio'
import Tecnologias from './components/Tecnologias'
import Contacto from './components/Contacto'
import AcercaDe from './components/AcercaDe'

function App() {
  return(
    <>
      <div className="mx-w-[1200px] mx-auto">

        <NavBar />
        <main className='text-neutral-900 dark:text-neutral-100 w-[90%] m-auto font-Releway'>
          <Inicio />
          <AcercaDe />
          <Experiencia />
          <Portafolio />
          <Tecnologias />
          <Contacto/>
        </main>
        <FooterBar />
      </div>

    </>
  );
}

export default App
