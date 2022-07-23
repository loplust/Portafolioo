import React from 'react'
import NavBar from '../NavBar/NavBar';
import Proyectos from '../Proyectos/Proyectos';
export default function Proyects({ darkMode }) {
  return (
    <div className='container'>
   <NavBar darkMode={darkMode}/>
   <Proyectos darkMode={darkMode}/>
    </div>
  
  )
}
