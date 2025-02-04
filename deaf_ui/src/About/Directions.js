import React from 'react';
import './Directions.css';

const Directions = () => {
    return (
        <div className="directions-container">
            <div className="directions-description">
                <p className="description-text">
                    DRIVING DIRECTIONS to UVA Deaf Literature Festival – UVA South Lawn, Nau Hall Auditorium
                    (things have changed on Brandon Avenue from previous lectures at Nau Hall due to the construction of two new dormitories).
                    The Address for Nau Hall/South Lawn is 1540 Jefferson Park Avenue. A map is included below and a visitor map to the UVA Grounds
                    is available at <a href="https://visitormap.virginia.edu/#/" target="_blank" rel="noopener noreferrer">UVA Visitor Map</a>.
                </p>
            </div>
            <img
                src={process.env.PUBLIC_URL + "/directions.png"}
                alt="Parking Directions"
                className="directions-img"
            />
        </div>
    );
};

export default Directions;
