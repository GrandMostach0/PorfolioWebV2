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

function App() {
  return(
    <>
      <div className="mx-w-[1200px] mx-auto">

        <NavBar />
        <main className='text-white w-[90%] m-auto'>
          <Inicio />
          <Experiencia />
          <Portafolio />
          <Tecnologias />
        </main>
        <FooterBar />
      </div>

    </>
  );
}

export default App
