import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaDiscord, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <Link to="/" className="logo"> 
                <span>
                    <img src="/yellowUACC.svg" alt="Logo"/>
                </span> 
                <span className="yellowtitle">University of Alberta Chess Club</span>
            </Link>

            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`nav-social-container ${isMobileMenuOpen ? "active" : ""}`}>
                <nav className="nav_links">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>Join</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/executives" onClick={() => setIsMobileMenuOpen(false)}>Executives</Link>            
                </nav>

                <div className="social-icons">
                    <a href="https://discord.gg/mUTGxFjWnm" target="_blank" rel="noopener noreferrer" className="social-btn discord">
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