import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import AboutFestival from '../AboutFestival/AboutFestival';
import Schedule from '../Schedule/Schedule';
import ShortenedReadingList from '../ShortenedReadingList/ShortenedReadingList';

function Home() {
    const scheduleRef = useRef(null);
    const scrollToSchedule = () => {
        scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [homePageStyle, setHomePageStyle] = useState(getHomePageStyle());

    function getHomePageStyle() {
        const isSmallScreen = window.innerWidth <= 600;
        return {
            backgroundImage: isSmallScreen ? `url(${process.env.PUBLIC_URL}/mobile_home.png)` : `url(${process.env.PUBLIC_URL}/home_page.png)`,
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
            <ShortenedReadingList />
            <div className="book-sell-info-section">
                <p>New Dominion Bookshop will be selling books during meal breaks!
                    There is a limited supply of books, so all are welcome to bring their own books for signing.</p>
                <p>To order a book from our reading list outside the event, please email: <b>staff@ndbookshop.com</b></p>
            </div>

        </div>
    );
}

export default Home;
