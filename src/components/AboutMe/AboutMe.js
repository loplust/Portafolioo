import React from "react";
import "../AboutMe/AboutMe.scss";
export default function AboutMe({ darkMode }) {
  return (
    <div className={`ContainerAboutme ${darkMode ? "darkMode" : ""}`}>
      <div className={`AboutMe ${darkMode ? "darkMode" : ""}`}>Sobre mi</div>
      <div className={`Me ${darkMode ? "darkMode" : ""}`}>
        Hola soy Front End Developer curioso y autodidacta, egresado del
        bootcamp <a href="https://drive.google.com/file/d/1n9U0xxdDTFwAx0BiSM_NY86O2vWggNFC/view?usp=sharing" rel="noreferrer" target='_blank'>DEV.F</a> donde di con personas geniales que impactaron
        positivamente mi aprendizaje e hicieron más fácil mis inicios. Tengo mas
        de un año de experiencia en el cual he ido puliendo mis habilidades
        técnicas desarrollando proyectos personales, velos <a href="/proyects">aquí</a> e incrementando mis ganas de seguir aprendiendo y creciendo
        profesionalmente. Me encantan las películas, los videos
        juegos y explorar el mundo.
      </div>
    </div>
  );
}
