import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShortenedReadingList.css';

const ShortenedReadingList = () => {
    const navigate = useNavigate();

    const authorReadingList = [
        { id: 1, title: "A Mighty Change: An Anthology of Deaf American Writing 1816-1864", author: "Christopher Krentz", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 2, title: "Deaf American Prose", author: "Kristen Harmon", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 3, title: "Deaf in America: Voices from a Culture", author: "Carol Padden", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 4, title: "Deaf Mobility Studies", author: "Erin Moriarty", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 5, title: "How to Communicate: Poems", author: "John Lee Clark", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 6, title: "Mean Little Deaf Queer", author: "Terry Galloway", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 7, title: "To & Fro", author: "Leah Hager Cohen", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 8, title: "Touch the Future: A Manifesto in Essays", author: "John Lee Clark", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 9, title: "Train Go Sorry", author: "Leah Hager Cohen", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
    ];    

    const recommendationsReadingList = [
        { id: 10, title: "Alone in the Mainstream (20th anniversary edition)", author: "Gina Olivia", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 11, title: "Angels and Outcasts: An Anthology of Deaf Characters", author: "Trent Batson (Editor), Eugene Bergman (Editor)", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 12, title: "Assembly Requires", author: "Raymond Luczak", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 13, title: "Burn Down the Ground", author: "Kambri Crews", image: process.env.PUBLIC_URL + "/dlf_logo.png"},
        { id: 14, title: "Deaf Utopia", author: "Nyle Dimarco", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 15, title: "El Deafo", author: "Cece Bell", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 16, title: "Everything That Hurt Us Becomes a Ghost", author: "Sage Ravenwood", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 17, title: "Far from Atlantis", author: "Raymond Luczak", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 18, title: "Girl at War", author: "Sara Novic", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 19, title: "Haben: The Deafblind Woman Who Conquered Harvard Law", author: "Haben Girma", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 20, title: "Hands of My Father", author: "Myron Uhlberg", image: process.env.PUBLIC_URL + "/dlf_logo.png"},
        { id: 21, title: "Sounds like Home", author: "Mary Herring Wright", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 22, title: "Talking Hands", author: "Margalit Fox", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 23, title: "The Deaf Heart", author: "Willy Conley", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 24, title: "The Silence Between Us", author: "Alison Gervais", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
        { id: 25, title: "True Biz", author: "Sara Novic", image: process.env.PUBLIC_URL + "/dlf_logo.png" },
    ];
    

    const handleClick = (title) => {
        navigate(`/reading-list/${title}`);
    };

    return (
        <div className="shortened-reading-list">
            <h1 className="shortened-reading-list-title">Books From Our Authors</h1>
            <div className="reading-list-grid">
                {authorReadingList.map((item) => (
                    <div
                        key={item.id}
                        className="reading-list-item"
                        onClick={() => handleClick(item.title)}
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
                        onClick={() => handleClick(item.title)}
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
