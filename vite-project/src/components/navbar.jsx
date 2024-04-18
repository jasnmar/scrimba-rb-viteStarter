//import React from 'react'
import reactLogo from "../assets/react-logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                <img className="logo-image" src={reactLogo}></img>
                <p className="title">Navbar Here</p>
            </div>
            <p className="extra-title">React Course - Project 1</p>
        </div>
        
    )
}

export default Navbar

/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/