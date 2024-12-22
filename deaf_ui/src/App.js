import React from 'react';
import './App.css';
import './AboutFestival/AboutFestival';
import AboutFestival from './AboutFestival/AboutFestival';

function App() {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src="logo.png" alt="Deaf Lit Fest Logo" className="logo-img" />
                    <h2 className="logo-text">DEAF LIT FEST</h2>
                </div>
                <nav className="nav">
                    <a href="#authors" className="nav-link">Authors</a>
                    <a href="#reading-list" className="nav-link">Reading List</a>
                    <a href="#about" className="nav-link">About</a>
                </nav>
            </header>
            <div className="home-page" style={homePageStyle}>
                <div className="hero">
                    <div className="title-year-container">
                        <h1 className="title">
                            <span>Deaf</span>
                            <span>Literature</span>
                            <span>Festival</span>
                        </h1>
                        <h2 className="year">2025</h2>
                    </div>
                    <div className="date-container">
                        <div className="date">February 8th, 2025</div>
                    </div>
                </div>
            </div>
            <AboutFestival />
        </div>
    );
}

const homePageStyle = {
    backgroundImage: 'url(/home_page.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
  };

export default App;
