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
                <p className="mb-4">
                    <strong>From I-64:</strong> Take Exit 118B onto US 29 North and immediately exit onto US 29 North Business. As you come down the ramp, turn right onto Fontaine Avenue, staying in the middle lane to quickly shift to the left for a straight path on Fontaine Ave. Follow the signs to the Medical Center/University Hospital, continuing through four traffic lights. At the fourth light, where you must turn left or right, get into the right lane and turn onto Jefferson Park Avenue towards UVA Hospital. After passing under a pedestrian walkway, turn right at the next stoplight onto Brandon Avenue.
                </p>

                <p className="mb-4">
                    <strong>From the North:</strong> Take US Route 29 South and stay on 29 South Business (Emmet Street) after passing under the US 250 Bypass. Continue straight past the intersection with US Route 250 Business (University Avenue/Ivy Road), then past the UVA Central Parking Garage and Bavaro Hall. After going under two bridges (a pedestrian bridge and a traffic bridge), follow Emmet Street as it curves sharply left, becoming Jefferson Park Avenue. Continue straight through the first stoplight, then turn right at the next stoplight onto Brandon Avenue.
                </p>

                <p className="mb-4">
                    <strong>From the South:</strong> Take US Route 29 North to the US 29 North Business exit (just after passing under I-64). Turn right onto Fontaine Avenue from the ramp, staying in the middle lane to easily merge left and proceed straight. Follow the signs to the Medical Center/University Hospital and continue straight through four traffic lights. At the fourth light, where a turn is required, move into the right lane and turn right onto Jefferson Park Avenue toward UVA Hospital. After going under a pedestrian walkway, turn right at the next stoplight onto Brandon Avenue.
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
