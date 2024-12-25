import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShortenedReadingList.css';
import {authorReadingList, recommendationsReadingList} from '../ReadingList/bookList';

const ShortenedReadingList = () => {
    const navigate = useNavigate();
    
    const handleClick = (id) => {
        navigate(`/reading-list/${id}`);
    };

    return (
        <div className="shortened-reading-list">
            <h1 className="shortened-reading-list-title">Books From Our Authors</h1>
            <div className="reading-list-grid">
                {authorReadingList.map((item) => (
                    <div
                        key={item.id}
                        className="reading-list-item"
                        onClick={() => handleClick(item.id)}
                    >
                        <img src={item.image} alt={item.title} className="reading-list-image" />
                        <p className="reading-list-text">{item.title}</p>
                        <p className="reading-list-author">By {item.author}</p>
                    </div>
                ))}
            </div>
            <h1 className="shortened-reading-list-title">Other Books We Recommend</h1>
            <div className="reading-list-grid">
                {recommendationsReadingList.map((item) => (
                    <div
                        key={item.id}
                        className="reading-list-item"
                        onClick={() => handleClick(item.id)}
                    >
                        <img src={item.image} alt={item.title} className="reading-list-image" />
                        <p className="reading-list-text">{item.title}</p>
                        <p className="reading-list-author">By {item.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShortenedReadingList;
