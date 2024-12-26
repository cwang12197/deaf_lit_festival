import React from 'react';
import './AboutTheHost.css';

const AboutTheHost = () => {
    return (
        <div className="about-host-container">
            <div className="host-image-container">
                <img
                    src={process.env.PUBLIC_URL + "/Molly Headshot.jpg"}
                    alt="Molly Rathbun"
                    className="host-image"
                />
                <div className="host-name-container">
                    <h3 className="host-name">Molly Rathbun</h3>
                    <p className="host-title">
                        Host and Organizer of the Deaf Literature Festival
                    </p>
                </div>
            </div>
            <div className="host-description">
                <h2 className="description-title">About the Host</h2>
                <p className="description-text">
                    Molly Rathbun is a fourth-year ASL Student at the University of Virginia. She is pursuing a minor in the ASL department and is the Public Relations Chair of UVA's DEAFS club. This year she is participating in an independent study alongside her advisor Gregory Propp to put on this Deaf Lit. Festival. As a lover of literature and friend of the Deaf community, she hopes to bring together all groups for one large festival celebrating Deaf literature.
                </p>
            </div>
        </div>
    );
};

export default AboutTheHost;
