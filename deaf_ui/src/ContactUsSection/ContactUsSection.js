import React, { useState } from 'react';
import './ContactUsSection.css';

const ContactUsSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Message:", message);
        setIsPopupOpen(false);
    };

    return (
        <>
            {/* Logo Section */}
            <div className="partners-section">
                <img src={process.env.PUBLIC_URL + "/echols_logo.png"} alt="Echols" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/uva_logo.png"} alt="University of Virginia" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/newdominion_logo.jpeg"} alt="New Dominion" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/uva_logo.png"} alt="University of Virginia" className="partner-logo" />
            </div>

            {/* Contact Us Section */}
            <div className="contact-us-section">
                <div className="contact-container">
                    <div className="logo-section">
                        <img
                            src={process.env.PUBLIC_URL + "/dlf_logo.png"}
                            alt="DLF Logo"
                            className="dlf-logo"
                        />
                    </div>
                    <div className="contact-content">
                        <div className="contact-message">
                            <h2>Contact Us</h2>
                            <button className="contact-button" onClick={() => setIsPopupOpen(true)}>Contact Us</button>
                        </div>
                        <div className="contact-info-box">
                            <p>
                                <strong>Date:</strong> February 8th, 2025
                            </p>
                            <p>
                                <strong>Address:</strong> University of Virginia Grounds<br />
                                Location TBD
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Your Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Message:</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}

</>
  );
};

export default ContactUsSection;
