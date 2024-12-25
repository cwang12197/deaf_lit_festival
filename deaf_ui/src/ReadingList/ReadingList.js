import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ReadingList.css';
import { authorReadingList, recommendationsReadingList } from './bookList';

const formatDescription = (description, title) => {
    const colonIndex = title.indexOf(':');
    const partToItalicize = colonIndex !== -1 ? title.slice(0, colonIndex) : title; // Extract part before the colon
    const escapedPartToItalicize = partToItalicize.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters

    // Create a regex for the part to italicize
    const italicRegex = new RegExp(`(${escapedPartToItalicize})`, 'gi');
    let formattedDescription = description.replace(italicRegex, `<i>$1</i>`);

    // Replace lines starting with '*' with a bullet point inside <ul> tags
    formattedDescription = formattedDescription.replace(
        /\n\s*\*\s+(.*?)(?=\n|$)/g,
        (match, p1) =>
            `<li style="margin: 0.5em 0; list-style-position: inside;">${p1}</li>`
    );

    // Wrap the list items in a <ul> with inline styles if any bullets were added
    if (formattedDescription.includes('<li>')) {
        formattedDescription = formattedDescription.replace(
            /(<li>.*?<\/li>)/s,
            (list) =>
                `<ul style="margin: 0; padding: 0; list-style-position: inside;">${list}</ul>`
        );
    }

    // Add styled line breaks after every 5 sentences, excluding periods followed by "
    formattedDescription = formattedDescription.replace(
        /((?<!\.\.\.)(?:[^.!?"]+(?:"[^"]*"[^.!?]*)*[.!?])){4}(?!\s*")/g,
        (match) => `${match}<span style="display: block; margin-top: 1.5em;"></span>`
    );

    return formattedDescription;
};

const ReadingList = () => {
    const { id } = useParams(); // Get the book id from the route parameters

    useEffect(() => {
        if (id) {
            const element = document.getElementById(`book-${id}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [id]);

    return (
        <div className="reading-list-container">
            <h1 className="reading-list-title">Reading List</h1>
            <h1 className="reading-list-section-title">Books From Our Authors</h1>
            {authorReadingList.map((book, index) => (
                <div
                    key={book.id}
                    id={`book-${book.id}`}
                    className={`book-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                >
                    <img src={book.image} alt={book.title} className="book-image" />
                    <div className="book-details">
                        <h2 className="book-title">{book.title} <span className="book-author">by {book.author}</span></h2>
                        <p className="book-genre">{book.genre}</p>
                        <p
                            className="book-description"
                            dangerouslySetInnerHTML={{
                                __html: formatDescription(book.description, book.title),
                            }}
                        />
                    </div>
                </div>
            ))}
              <h1 className="reading-list-section-title">Books We Recommend</h1>
              {recommendationsReadingList.map((book, index) => (
                <div
                    key={book.id}
                    id={`book-${book.id}`}
                    className={`book-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                >
                    <img src={book.image} alt={book.title} className="book-image" />
                    <div className="book-details">
                        <h2 className="book-title">{book.title} <span className="book-author">by {book.author}</span></h2>
                        <p className="book-genre">{book.genre}</p>
                        <p
                            className="book-description"
                            dangerouslySetInnerHTML={{
                                __html: formatDescription(book.description, book.title),
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReadingList;
