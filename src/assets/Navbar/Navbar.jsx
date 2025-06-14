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

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        handleClose(); // close menu after scroll
      };

    return(
        <>
            <div className="nav-section">
                <div className="coffee-logo" onClick={() => scrollToSection('home')}>
                    <img src={logo} alt="coffee logo" />
                    <h3>Coffee</h3>
                </div>
                <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
                    <div className="menu" onClick={() => scrollToSection('home')} ><span>Home</span></div>
                    <div className="menu" onClick={() => scrollToSection('about')} ><span>About</span></div>
                    <div className="menu" onClick={() => scrollToSection('menu')} ><span>Menu</span></div>
                    <div className="menu" onClick={() => scrollToSection('testimonials')} ><span>Testimonials</span></div>
                    <div className="menu" onClick={() => scrollToSection('contact')} ><span>Contact</span></div>
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