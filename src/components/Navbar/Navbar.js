import React from 'react'
import Logo from "./rickymorty-portal.png";
import "../../App.css"
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
            <Link to="/">
              <img src={Logo} alt="Logo" width="50" height="50" title="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            
            <style jsx>
                {`
                button[aria-expanded="false"] > .close {
                    display: none;
                }        
                button[aria-expanded="true"] > .open {
                    display: none;    
                }
                `}
            </style>

            <i className="fas fa-bars open fw-bold text-dark"></i>
            <i className="fas fa-times close fw-bold text-dark"></i>

            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5">
                <NavLink activeClassName="active" to="/" className="nav-link">
                    Personagens
                </NavLink>
                <NavLink to="/episodes" className="nav-link">
                    Episódios
                </NavLink>
                <NavLink to="/location" className="nav-link">
                    Localização
                </NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
