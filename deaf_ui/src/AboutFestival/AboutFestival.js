import React from 'react';
import './AboutFestival.css';

function AboutFestival() {
    return (
        <div className="about-festival">
            <div className="about-festival-content">
                <div className="image-section">
                    <img src={process.env.PUBLIC_URL+"/about_festival.jpeg"} alt="About the Festival Graphic" className="about-festival-image" />
                </div>
                <div className="text-section">
                    <h1>What is the Deaf Lit. Festival?</h1>
                    <p>
                        The Deaf Literature Festival is a day-long celebration of Deaf literature. The day will consist of hour-long sessions
                        of author readings and will end with a storytelling open mic night. Charlottesville is a hub for both Deaf culture
                        and literature, and we hope you join us in bringing these two together! 
                    </p>
                    <b>This is a free event! No registration needed!</b>
                </div>
            </div>
        </div>
    );
}

export default AboutFestival;
