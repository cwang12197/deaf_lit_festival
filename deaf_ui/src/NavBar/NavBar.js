import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <header className="header">
            <div className="logo" onClick={handleLogoClick}>
                <img src={process.env.PUBLIC_URL + "/dlf_logo.png"} alt="Deaf Lit Fest Logo" className="logo-img" />
                <h2 className="logo-text">DEAF LIT FEST</h2>
            </div>
            <nav className="nav">
                <Link to="/authors" className="nav-link">Authors</Link>
                <Link to="/reading-list" className="nav-link">Reading List</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>
        </header>
    );
};

export default NavBar;
