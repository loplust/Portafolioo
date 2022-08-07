import React from 'react'
import '../AboutMe/AboutMe.scss'
export default function AboutMe ({ darkMode }) {
  return (
      <div className={`ContainerAboutme ${darkMode ? 'darkMode' : ''}`}>
          <div className={`AboutMe ${darkMode ? 'darkMode' : ''}`}>
        Sobre mi
         </div>
        <div className={`Me ${darkMode ? 'darkMode' : ''}`}>
        Soy front-end developer.
Actualmente, estudio desarrollo web de manera remota.
Me encanta CSS, JavaScript y React.js.
Estoy interesado en toda la parte visual de la web, desde el diseño a su desarrollo así como la usabilidad, adaptabilidad y la accesibilidad. Mi objetivo es crear experiencias visuales impresionantes y efectivas, cada sección al píxel.
Me gusta desarrollar, hacer amistades, el contenido audiovisual, ver peliculas y escribir.
Realice un Bootcamp en el cual aprendí mas sobre este mundo de la tecnología. 

        </div>
   
      </div>
    
  )
}