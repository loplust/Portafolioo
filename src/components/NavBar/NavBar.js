import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.scss'
export default function NavBar() {
  return (
      
          <div className="Navbar">
          <ul className='list'>
      <li><NavLink
       to={'/'} className='nav-bar-link' /* style={({isActive})=>{return {backgroundColor: isActive ? 'active' : 'inactive'}}} */>Me</NavLink></li>
      <li>
        <NavLink 
        to={'/proyects'} className='nav-bar-link' /* style={({isActive})=>{return {backgroundColor: isActive ? 'active' : 'inactive'}}} */>Proyectos</NavLink></li>
      <li>
        <NavLink 
        to={'/contact'} className='nav-bar-link' /* style={({isActive})=>{return {backgroundColor: isActive ? 'active' : 'inactive'}}} */>Contacto</NavLink></li>
  </ul> 
      </div>
      
      
  )
}