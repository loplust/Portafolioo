import React from "react";
import "../Proyectos/Proyectos.scss";
import todoapp from "../../images/todo-app.png";
import giftBrowser from "../../images/giftbrowser.png";
import cripto from "../../images/cripto.png";
import rickymorty from "../../images/rickymorty.png";
export default function proyectos({ darkMode }) {
  return (
    <div className={`ContainerProyecto ${darkMode ? "darkMode" : ""}`}>
      <div className={`proyects ${darkMode ? "darkMode" : ""}`}>
        <div className="image">
          <img src={rickymorty} alt="" />
        </div>
        <div className={`Containerinfo ${darkMode ? "darkMode" : ""}`}>
          <div className={`info ${darkMode ? "darkMode" : ""}`}>
            <h4>Diseño, Desarrollo</h4>
          </div>

          <div className="title">
            <h2>Rick and Morty</h2>
          </div>
          <div className="info2"></div>
          <div className="Containerboton">
            <a
              className={` ${darkMode ? "darkMode" : ""}`}
              href="https://cerulean-torrone-8a3e68.netlify.app/"
              target='_blank' rel='noreferrer noopener'
            >
              <button className={`boton ${darkMode ? "darkMode" : ""}`}>
                demo
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={`proyects ${darkMode ? "darkMode" : ""}`}>
        <div className="image">
          <img src={todoapp} alt="" />
        </div>
        <div className={`Containerinfo ${darkMode ? "darkMode" : ""}`}>
          <div className="info">
            <h4>Diseño, Desarrollo</h4>
          </div>

          <div className="title">
            <h2>Todo App</h2>
          </div>
          <div className="info2"></div>
          <div className="Containerboton">
            <a
              className={` ${darkMode ? "darkMode" : ""}`}
              href="https://euphonious-starlight-a1098f.netlify.app/"
              target='_blank' rel='noreferrer noopener'
            >
              <button className={`boton ${darkMode ? "darkMode" : ""}`}>
                demo
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={`proyects ${darkMode ? "darkMode" : ""}`}>
        <div className="image">
          <img src={giftBrowser} alt="" />
        </div>
        <div className={`Containerinfo ${darkMode ? "darkMode" : ""}`}>
          <div className="info">
            <h4>Diseño, Desarrollo</h4>
          </div>

          <div className="title">
            <h2>Browser Gift</h2>
          </div>
          <div className="info2"></div>
          <div className="Containerboton">
            <a
              className={` ${darkMode ? "darkMode" : ""}`}
              href="https://timely-empanada-cfa9a3.netlify.app/"
              target='_blank' rel='noreferrer noopener'
            >
              <button className={`boton ${darkMode ? "darkMode" : ""}`}>
                demo
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={`proyects ${darkMode ? "darkMode" : ""}`}>
        <div className="image">
          <img src={cripto} alt="" />
        </div>
        <div className={`Containerinfo ${darkMode ? "darkMode" : ""}`}>
          <div className="info">
            <h4>Diseño, Desarrollo</h4>
          </div>

          <div className="title">
            <h2>Search Cripto</h2>
          </div>
          <div className="info2"></div>
          <div className="Containerboton">
            <a
              className={` ${darkMode ? "darkMode" : ""}`}
              href="https://steady-gaufre-5175cf.netlify.app/"
              target='_blank' rel='noreferrer noopener'
            >
              <button className={`boton ${darkMode ? "darkMode" : ""}`}>
                demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
