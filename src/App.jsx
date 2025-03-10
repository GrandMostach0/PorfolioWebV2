import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* SECCION DE IMPORTACIONES */
import NavBar from './components/navBar'
import FooterBar from './components/FooterBar'


import Inicio from './components/Inicio'

function App() {
  return(
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="mx-w-[1200px] mx-auto">
        <NavBar />
        <main className='text-white'>
          <Inicio />
        </main>
        <h1>hola</h1>
        <FooterBar />
      </div>

    </>
  );
}

export default App
