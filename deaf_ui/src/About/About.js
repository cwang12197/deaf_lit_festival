import React from 'react';
import WhatWeCareAbout from './WhatWeCareAbout';
import './About.css';
import ASLPhotos from './ASLPhotos';
import AboutTheHost from './AboutTheHost';

const About = () => {
    return (
        <div className="about-page">
            <h1 className="about-heading">About</h1>
            <WhatWeCareAbout />
            <ASLPhotos />
            <AboutTheHost />
        </div>
    );
};

export default About;
