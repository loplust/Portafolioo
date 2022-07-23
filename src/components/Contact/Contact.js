import React from 'react'
import NavBar from '../NavBar/NavBar';
import Contacto from './Contacto';
export default function Contact({ darkMode }) {
  return (
      <div className='container'>
     
    <NavBar darkMode={darkMode}/>
    <Contacto darkMode={darkMode}/>
  
      </div>
   
  )
}
