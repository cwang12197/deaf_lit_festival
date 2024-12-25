import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ReadingList.css';
import { authorReadingList, recommendationsReadingList } from './bookList';

const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapes special characters
};

// Function to italicize only the part of the title before the colon and add line breaks
const italicizeTitleAndAddLineBreaks = (description, title) => {
    const colonIndex = title.indexOf(':');
    const partToItalicize = colonIndex !== -1 ? title.slice(0, colonIndex) : title; // Extract part before the colon
    const escapedPartToItalicize = escapeRegExp(partToItalicize);

    // Create a regex for the part to italicize
    const regex = new RegExp(`(${escapedPartToItalicize})`, 'gi');
    let updatedDescription = description.replace(regex, `<i>$1</i>`);

    // Add <br /> after every 5 sentences
    updatedDescription = updatedDescription.replace(
        /((?:[^.!?]+[.!?]){5})/g,
        (match) => `${match}<br />`
    );

    return updatedDescription;
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
            {authorReadingList.map((book, index) => (
                <div
                    key={book.id}
                    id={`book-${book.id}`}
                    className={`book-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                >
                    <img src={book.image} alt={book.title} className="book-image" />
                    <div className="book-details">
                        <h2 className="book-title">{book.title} <span className="book-author">by {book.author}</span></h2>
                        <p
                            className="book-description"
                            dangerouslySetInnerHTML={{
                                __html: italicizeTitleAndAddLineBreaks(book.description, book.title),
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReadingList;
