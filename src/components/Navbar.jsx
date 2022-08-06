import React from 'react'
import {NavLink } from 'react-router-dom'

export default function Navbar(){

    const navLinkStyle = ({isActive})=>{
        return {
            color : isActive ? "#ff7f50" : "white"
        }
    }

    return(
        <div className='nav'>
        <NavLink  to='/' style={navLinkStyle}>Home</NavLink >
        <NavLink  to='/about'  style={navLinkStyle}>About</NavLink >
        <NavLink  to='/works'  style={navLinkStyle}>Works</NavLink >
        <NavLink  to='/skills'  style={navLinkStyle}>Skills</NavLink >
        <NavLink  to='/contact'  style={navLinkStyle}>Contact</NavLink >
        </div>
    )
}