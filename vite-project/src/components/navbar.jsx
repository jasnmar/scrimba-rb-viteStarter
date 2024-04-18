//import React from 'react'
import reactLogo from "../assets/react-logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="nav">
            <div className="logo">
                <img className="logo-image" src={reactLogo}></img>
                <p className="title">Navbar Here</p>
            </div>
            <p className="extra-title">React Course - Project 1</p>
        </nav>
        
    )
}

export default Navbar

