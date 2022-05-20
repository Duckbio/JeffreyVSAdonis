import React from "react";
import '../Navbar.css';
import AdonisImg from "../images/adonisgold.png"

function Navbar() {
    return (
        <nav>
            <img src={AdonisImg} alt="Adonis"></img>
            <h1><span className="jeffrey">Jeffrey</span><span className="vs"> VS </span><span className="adonis">Adoniss</span></h1>
            <h3>By Rata :)</h3>
        </nav>
    );
}

export default Navbar;