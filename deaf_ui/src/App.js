import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './AboutFestival/AboutFestival';
import AboutFestival from './AboutFestival/AboutFestival';
import Schedule from './Schedule/Schedule';

function App() {
    const scheduleRef = useRef(null);

    const scrollToSchedule = () => {
        scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [homePageStyle, setHomePageStyle] = useState(getHomePageStyle());

    function getHomePageStyle() {
        const isSmallScreen = window.innerWidth <= 600;
        return {
            backgroundImage: isSmallScreen ? 'none' : `url(${process.env.PUBLIC_URL}/home_page.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: 'transparent',
        };
    }

    useEffect(() => {
        const handleResize = () => setHomePageStyle(getHomePageStyle());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/dlf_logo.png"} alt="Deaf Lit Fest Logo" className="logo-img" />
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
                    <div className="date-container" onClick={scrollToSchedule}>
                        <div className="date">February 8th, 2025</div>
                    </div>
                </div>
            </div>
            <AboutFestival />
            <div ref={scheduleRef}>
                <Schedule />
            </div>
        </div>
    );
}


export default App;
