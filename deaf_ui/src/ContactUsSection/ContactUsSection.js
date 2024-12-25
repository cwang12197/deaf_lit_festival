import React from 'react';
import './ContactUsSection.css';

const ContactUsSection = () => {
    return (
        <div className="contact-us-section">
            <div className="partners-section">
                <img src={process.env.PUBLIC_URL + "/echols_logo.png"} alt="Echols" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/uva_logo.png"} alt="University of Virginia" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/newdominion_logo.jpeg"} alt="New Dominion." className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/uva_logo.png"} alt="University of Virginia" className="partner-logo" />
            </div>
            <div className="contact-details">
                <h2>Contact Us</h2>
                <p><strong>Date:</strong> February 8th, 2025</p>
                <p><strong>Address:</strong> University of Virginia Grounds<br />Location TBD</p>
                <button className="contact-button">Button to our email*</button>
            </div>
        </div>
    );
};

export default ContactUsSection;
