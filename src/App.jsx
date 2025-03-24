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
      <div className="relative mx-w-[1200px] mx-auto">
        <div class="absolute inset-0 z-[-5] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

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
