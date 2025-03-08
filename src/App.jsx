import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* SECCION DE IMPORTACIONES */
import NavBar from './components/navBar'
import FooterBar from './components/FooterBar'


function App() {
  return(
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <NavBar />
      <main className='text-white'>
        <p>HELLO</p>
      </main>
      <FooterBar />
    </>
  );
}

export default App
