import React from 'react';
import './WhatWeCareAbout.css';

const WhatWeCareAbout = () => {
    return (
        <div className="what-we-care-about-container">
            <div className="content-section">
                <h1 className="section-header">Deaf Lit Festival</h1>
                <div className="content">
                    <div className="about-text-section">
                        <p className="description">
                        The Deaf Literature Festival is a festival that was created to bring together all people in a large celebration of Deaf literature. With authors from Canada to San Francisco to our very own Charlottesville, our authors represent a wide range of literature and experiences. Take a look at our recommended reading list to see what books our authors have written as well as a diverse list of books you may also enjoy by Deaf and CODA authors. There will be food, drinks, and coffee provided. Parking is free on Saturdays and in depth parking maps will be provided as the event nears. We hope to see you at the festival!
                        </p>
                        <p className='description-event'>
                            <b>This is a free event! No registration needed!</b>
                        </p>
                        <p className="description">Location is on UVA Grounds at Nau Hall.
                        </p>
                        <p className="description"> *Driving Directions below (Nau Hall address is 1540 Jefferson Park Ave.)*</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeCareAbout;
