import React from 'react';
import './WhatWeCareAbout.css';

const WhatWeCareAbout = () => {
    return (
        <div className="what-we-care-about-container">
            <div className="content-section">
                <h1 className="section-header">What We Care About</h1>
                <div className="content">
                    <img
                        src={process.env.PUBLIC_URL+"/horizons.jpg"} 
                        alt="People sitting and talking"
                        className="section-image"
                    />
                    <div className="about-text-section">
                        <h2 className="sub-header">Expanding our horizon</h2>
                        <p className="description">
                            You can talk about each company highlight more extensively in short but impactful paragraphs. This is a great way to surface salient points and accompany them with key visuals.
                        </p>
                        <p className="description">
                            Some prompts that can help: What are the main achievements? What did it take to reach the goals? What is the impact of the outcome on the business, the people involved, and the industry as a whole?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeCareAbout;
