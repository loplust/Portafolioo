import React from 'react'
import '../Intereses/Intereses.scss'
export default function Intereses ({ darkMode }) {
  return (
      <div className='ContainerInteres'>
          
          <h3  className={`Intereses ${darkMode ? 'darkMode' : ''}`}>
             Intereses
             </h3> 
            <div className='ListaIntereses'>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>React</div>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>React Native</div>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>CSS</div>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>Javascript</div>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>Styled-Components</div>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>TailWind</div>
                <div className={`listIntereses ${darkMode ? 'darkMode' : ''}`}>Sass</div>
            </div>
        
      </div>
    
  )
}