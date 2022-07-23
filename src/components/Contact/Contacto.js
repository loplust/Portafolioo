import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import '../Contact/Contacto.scss'
export default function Contacto({ darkMode }) {
  return (
      <div className='ContainerContacto'>
          <div className={`Contacto ${darkMode ? 'darkMode' : ''}`}>
              <p>
                Si deseas contactarme por alguna razón
               no lo dudes y envíame un saludo con tu emoji favorito
               </p> 
          </div>
          <div className="ContainerMensaje">
              <p className={`vibe ${darkMode ? 'darkMode' : ''}`}>
                ¡Buen dia! 🤙
                </p>
          </div>
            <div className={`RedSocial ${darkMode ? 'darkMode' : ''}`}>
               <a 
               href='https://www.linkedin.com/in/luis-alejandro-l%C3%B3pez-aponte-27424a214/'
                target='_blank'
                 rel='noopener noreferrer'
                 className={`link ${darkMode ? 'darkMode' : ''}`}><BsLinkedin/></a> 
                <a 
                href='https://wa.me/997265797'
                 target='_blank' 
                 rel='noopener noreferrer'
                 className={`link ${darkMode ? 'darkMode' : ''}`}><FaWhatsapp/></a>
                <MdOutlineAlternateEmail/>
                <a 
                href='https://github.com/lustgar'
                 target='_blank'
                  rel='noopener noreferrer'
                  className={`link ${darkMode ? 'darkMode' : ''}`}><AiFillGithub/></a>
              </div>
      </div>
    
  )
}