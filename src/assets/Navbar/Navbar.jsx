import React, { useState } from 'react';
import './Navbar.css'
import logo from '/Images/coffee-icon.png'
import navIcon from '/Images/navbar.png'
import close from '/Images/delete-sign.png'

function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(prev => !prev);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    return(
        <>
            <div className="nav-section">
                <div className="coffee-logo">
                    <img src={logo} alt="coffee logo" />
                    <h3>Coffee</h3>
                </div>
                <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
                    <div className="menu" onClick={handleClose}><span>Home</span></div>
                    <div className="menu" onClick={handleClose}><span>About</span></div>
                    <div className="menu" onClick={handleClose}><span>Menu</span></div>
                    <div className="menu" onClick={handleClose}><span>Testimonials</span></div>
                    <div className="menu" onClick={handleClose}><span>Contact</span></div>
                </div>
                <div className="nav-icon" onClick={handleMenuToggle}>
                    <img src={navIcon} alt="navbar-icon" loading="lazy"/>
                </div>
                <div className={`close-icon ${menuOpen ? 'show' : ''}`} onClick={handleClose}>
                    <img src={close} alt="close-icon" loading="lazy"/>
                </div>
            </div>
        </>
    );
}
export default Navbar