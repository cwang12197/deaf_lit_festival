import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ContactUsSection from './ContactUsSection/ContactUsSection';
import Authors from './Authors/Authors';
import NavBar from './NavBar/NavBar';
import ReadingList from './ReadingList/ReadingList';
import About from './About/About';

function App() {
    return (
        <Router basename="/deaf_lit_festival">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/reading-list" element={<ReadingList />} />
                <Route path="/reading-list/:id" element={<ReadingList />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <ContactUsSection />
        </Router>
    );
}

export default App;
