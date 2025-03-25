import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaDiscord, FaInstagram } from "react-icons/fa"; // Import icons

const Navbar = () => {
    return (
        <header className="header">
            <Link to="/" className="logo"> 
                <span>
                    <img src="./src/imgs/UACC.svg" alt="Logo"/>
                </span> 
                University of Alberta Chess Club
            </Link>
            <div className="nav-social-container">
                <nav className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/about">About</Link>
                    <Link to="/executives">Executives</Link>            
                </nav>

                <div className="social-icons">
                    <a href="https://discord.gg/yxjc4xX7" target="_blank" rel="noopener noreferrer" className="social-btn discord">
                        <FaDiscord />
                    </a>
                    <a href="https://www.instagram.com/uofachess/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
