import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ContactUsSection from './ContactUsSection/ContactUsSection';

function App() {
    return (
        <Router basename="/deaf_lit_festival">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <ContactUsSection />
        </Router>
    );
}

export default App;
