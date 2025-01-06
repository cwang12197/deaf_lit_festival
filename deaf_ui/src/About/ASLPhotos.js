import React from 'react';
import './ASLPhotos.css';

const ASLPhotos = () => {
    return (
        <>
            <div className="asl-photos-container">
                <h1 className="asl-header">UVA American Sign Language Department</h1>
                <div className="photos-row">
                    <div className="photo photo-style-1">
                        <img
                            src={process.env.PUBLIC_URL + "/ASL GU trip.PNG"}
                            alt="ASL group on a bus"
                            className="photo-img"
                        />
                    </div>
                    <div className="photo-stack">
                        <div className="photo photo-style-2">
                            <img
                                src={process.env.PUBLIC_URL + "/ASL signing lunch.PNG"}
                                alt="ASL group on campus"
                                className="photo-img"
                            />
                        </div>
                        <div className="photo photo-style-3">
                            <img
                                src={process.env.PUBLIC_URL + "/ASL Professors.png"}
                                alt="ASL group outdoors"
                                className="photo-img"
                            />
                        </div>
                    </div>
                </div>
            </div><div className="asl-description-section">
                <p className="description">
                    It is the goal of our ASL Program to provide the best undergraduate education in ASL available anywhere with a big part of that being creating a community of language learners that emulates the close-knit, supportive Deaf community. We have a unique, self-developed first year language curriculum that stresses communicative activities and a camaraderie among our students, a wealth of extra-curricular activities to promote our students’ language development, and professors and instructors (most of whom are Deaf) with many years of teaching experience and a passion for sharing and imparting their language and culture with our students.
                </p>
                <p className="description">
                    The UVA American Sign Language Program currently offers a five-semester language sequence in ASL, from the beginning through the conversational level, as well as several elective courses in Deaf Studies, linguistics, Deaf history, Deaf and CODA representations, and other ASL and Deaf culture topics.
                </p>
            </div></>
    );
};

export default ASLPhotos;
