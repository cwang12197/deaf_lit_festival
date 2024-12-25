import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ContactUsSection from './ContactUsSection/ContactUsSection';
import Authors from './Authors/Authors';
import NavBar from './NavBar/NavBar';

function App() {
    return (
        <Router basename="/deaf_lit_festival">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<Authors />} />
            </Routes>
            <ContactUsSection />
        </Router>
    );
}

export default App;
