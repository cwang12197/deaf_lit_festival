import React from 'react';
import './Authors.css';

const authors = [
    {
        id: 1,
        name: "Carol Padden",
        bio: "Carol Padden is the Sanford I. Berman Endowed Chair and Distinguished Professor of Communication and since 2014 she has held the position of Dean of the School of Social Sciences at the University of California, San Diego. Her areas of research include language emergence and change. She studies newly emerging sign languages around the world, including in a community of Bedouins in southern Israel and in a farming community in southern Turkey. Her work explores how gestural language arises in a community and is transformed into sign language as it is transmitted across generations. She has written numerous academic and popular articles as well as books about sign language grammars and comparative language structure across sign languages. Her work has been supported by the US Department of Education, the Spencer Foundation, the National Science Foundation and National Institutes of Health. In 1992 she was awarded a John D. Simon Guggenheim Fellowship, and in 2010, a John D. and Catherine T. MacArthur Foundation Fellowship. She is a Fellow of the American Association for the Advancement of Science (AAAS), and the Linguistic Society of America.",
        image: process.env.PUBLIC_URL + "/Carol Paden.png",
    },
    {
        id: 2,
        name: "Christopher Krentz",
        bio: "Christopher Krentz is a late-deafened professor of English and ASL (joint appointment) at the University of Virginia. Among other works, he is the author of a monograph, Writing Deafness: The Hearing Line in Nineteenth-Century American Literature.",
        image: process.env.PUBLIC_URL + "/Christopher Krentz.jpg",
    },
    {
        id: 3,
        name: "Erin Moriarity",
        bio: "Erin Moriarity researches the intersection of mobility and languaging practices, focusing on deaf linguistic practices in transnational settings as they shape and are shaped by language ideologies. Her work examines language use, translanguaging, sign language documentation, and the socio-cultural dynamics within deaf communities. Moriarty's scholarly contributions include the recent co-edited volume, 'Deaf Mobility Studies.' Notable articles include 'Deaf Cosmopolitanism: Calibrating as a Moral Process' (with Annelies Kusters), 'Filmmaking in a Linguistic Ethnography of Deaf Tourist Encounters,' and 'Sign to me, not the children': Ideologies of language contamination at a deaf tourist site in Bali. Additionally, she has produced an ethnographic film, '#DeafTravel: Deaf Tourism in Bali.' Her research has been supported by fellowships and awards, including a Fulbright-National Geographic Digital Storytelling Fellowship and a recent award from the NEH to reimagine Deaf Studies for the future. Moriarty earned her Ph.D. in Anthropology from American University, her M.A. in Communications in Contemporary Society from Johns Hopkins University, and a B.A. in Art History and Anthropology from Smith College. She has held a post-doctoral appointment at Heriot-Watt University in Edinburgh, Scotland. She is now Assistant Professor in Anthropology at the University of Virginia.",
        image: process.env.PUBLIC_URL + "/Erin Moriarty.jpeg",
    },
    {
        id: 5,
        name: "Kristen Harmon",
        bio: "Kristen Harmon is a Professor of English at Gallaudet University, specializing in Deaf literature and creative writing. She has published multiple short stories and creative non-fiction. Kristen has also curated and published multiple anthologies and collections of contemporary and archival creative writing, including Deaf American Prose, Volumes I & II. Additionally, Kristen has edited and written introductions for multiple recovered manuscripts by Deaf authors and is currently the series editor for the Classics in Deaf Studies imprint under Gallaudet University Press.",
        image: process.env.PUBLIC_URL + "/kristen_harmon.jpg",
    },
    {
        id: 6,
        name: "Leah Hager Cohen",
        bio: "Leah Hager Cohen grew up at the Lexington School for the Deaf, where both of her parents worked and her grandfather had been a student. She spent a few years working as an ASL interpreter in New York City before attending Columbia University's Graduate School of Journalism, which led to her first book, Train Go Sorry: Inside a Deaf World. She is the author of seven novels, including To & Fro, and five works of nonfiction, including I Don't Know: In Praise of Admitting Ignorance (Except When You Shouldn't). Cohen is the Barrett Professor of Creative Writing at the College of the Holy Cross.",
        image: process.env.PUBLIC_URL + "/Leah Hager Cohen.JPG",
    },
    {
        id: 7,
        name: "Terry Galloway",
        bio: `In a world where disability often comes packaged with pity and queerness with caution, Terry Galloway decided early on to throw out both scripts. Armed with a sharp tongue and a sharper sense of humor, she set out to create her own irreverent path as a half-pint, deaf, queer troublemaker. From a childhood in Berlin rocked by medical accident to a freewheeling Texas adulthood full of theater, activism, and just enough sexual chaos to keep it interesting, Galloway has long used laughter as her defense against life’s cruelest jokes. In Texas, she Is known for her cross dressing roles in Shakespeare and at Esther’s Follies, Austin’s legendary cabaret. She’s toured the world both as a solo performance artist and with P.S 122 ‘s Field Trips. In the guise of giant rodent, she heads up Mickee Faust, a radicalized community theater for Tallahassee, Florida’s disability, queer, and just plain weird community. When not touring, she lives in Tallahassee with her wife, Donna Marie Nudd, their two cats and bevy of friends and family. Her memoir, Mean Little deaf Queer is being re-issued in 2025 with a new afterword detailing her love/hate affair with technology and the two-faced lure of being “cured." She is stupidly pleased that on June 11, 2024 "Mean Little deaf Queer memoirist Galloway" was the 8 Across clue for the Apple News + Crossword.  The answer was "Terry." `,
        image: process.env.PUBLIC_URL + "/terry.png",
    }
];

const Authors = () => {
    return (
        <div className="authors-container">
            <h1 className="authors-title">Authors</h1>
            <div className="authors-list">
                {authors.map((author) => (
                    <div key={author.id} className="author-item">
                        <img src={author.image} alt={author.name} className="author-image" />
                        <div className="author-info">
                            <h2 className="author-name">{author.name}</h2>
                            <p className="author-bio">{author.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Authors;
