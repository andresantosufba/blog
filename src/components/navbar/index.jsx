import React from "react";
import "./styles.css";
import {Link} from  "react-router-dom"

export default function Navbar(){

    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">
                    <h3>Blog ISM</h3>
                </Link>
            </div>

            <div>
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/post">Sobre</Link>
                <Link className="navlink" to="/contact">Contato</Link>
                <Link className="navlink" to="/culture">Cultura</Link>
                

            </div>
        </nav>


    )
}