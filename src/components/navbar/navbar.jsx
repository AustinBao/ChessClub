import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaDiscord, FaInstagram } from "react-icons/fa"; // Import icons

const Navbar = () => {
    return (
        <header class="header">
            <Link to="/" class="logo"> 
                <span>
                    <img src="./src/imgs/yellowUACC.svg" alt="Logo"/>
                </span> 
                
                <span class="yellowtitle">University of Alberta Chess Club</span>
                
            </Link>
            <div className="nav-social-container">
                <nav className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/join">Join</Link>
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
