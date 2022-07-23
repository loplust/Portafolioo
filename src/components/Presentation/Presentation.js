import React from 'react'
import imageProfile from '../../images/image.png'
import '../Presentation/Presentation.scss'
export default function Presentation({ darkMode }) {
  return (
    <div className={`ContainerPresentacion ${darkMode ? 'darkMode' : ''}`}>
        <h2 className={`Saludo ${darkMode ? 'darkMode' : ''}`}>
        ¡Hola! mi nombre es Luis López, me gusta las tecnologias y aprender.
        </h2 >
        <div className="ImageProfile">
            <img className='imagen' src={imageProfile} alt="" />
        </div>
    </div>
  )
}