import React, { useState } from 'react';
import './ContactUsSection.css';
import emailjs from '@emailjs/browser';

const ContactUsSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState("");

    emailjs.init({
        publicKey: "ka1fthRPcKPikK54W",
        blockHeadless: true,
        blockList: {
            list: [],
            watchVariable: 'userEmail',
        },
        limitRate: {
            id: 'app',
            throttle: 10000,
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFeedback("");

        const templateParams = {
            email,
            message,
        };

        emailjs
            .send(
                "service_sq25vde",
                "template_hu1rtfr",
                templateParams,
                "ka1fthRPcKPikK54W"
            )
            .then((response) => {
                console.log("success");
                setFeedback("Your message has been sent successfully!");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log("failure", error);
                setFeedback("Failed to send your message. Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
                setIsPopupOpen(false);
            });
    };

    return (
        <>
            {/* Logo Section */}
            <div className="partners-section">
                <img src={process.env.PUBLIC_URL + "/echols_logo.png"} alt="Echols" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/uva_logo.png"} alt="University of Virginia" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/newdominion_logo.jpeg"} alt="New Dominion" className="partner-logo" />
                <img src={process.env.PUBLIC_URL + "/Deaf's Logo.png"} alt="DEAFS" className="partner-logo" />
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
                                <strong>Date</strong><br />
                                February 8th, 2025
                            </p>
                            <p>
                                <strong>Address</strong><br />
                                University of Virginia Grounds<br />
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
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Submit"}
                            </button>
                        </form>
                        {feedback && <p>{feedback}</p>}
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactUsSection;
