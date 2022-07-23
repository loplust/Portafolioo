import React from "react";
import './App.scss';
import Me from './components/AboutMe/Me';
import { Routes, Route } from 'react-router-dom'
import Proyects from './components/Proyectos/Proyects';
import Contact from './components/Contact/Contact';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className={`body ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode}/>
      <Routes>
        <Route path='/' 
          element={<Me
          darkMode={darkMode}
          />}
        />
        <Route path='/proyects'
          element={<Proyects
          darkMode={darkMode}/>}
        />
        <Route path='/contact' 
          element={<Contact
          darkMode={darkMode}/>}
        />
      </Routes>  
      <Footer/>
    </div> 
  );
}

export default App;
