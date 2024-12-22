import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <img src="logo.png" alt="Deaf Lit Fest Logo" style={{ height: '70px', marginRight: '15px' }} />
          <h2 style={{ color: '#2c6fa4', margin: 0 }}>Deaf Lit Fest</h2>
        </div>
        <nav style={navStyle}>
          <a href="#authors" style={navLinkStyle}>Authors</a>
          <a href="#reading-list" style={navLinkStyle}>Reading List</a>
          <a href="#about" style={navLinkStyle}>About</a>
        </nav>
      </header>
      <div style={homePageStyle}>
        <div style={heroStyle}>
          <div style={titleDateContainerStyle}>
            <h1 style={titleStyle}>Deaf Literature Festival</h1>
            <div style={dateStyle}>February 8th, 2025</div>
          </div>
          <h2 style={yearStyle}>2025</h2>
        </div>
      </div>
    </div>
  );
}

const homePageStyle = {
  backgroundImage: 'url(/home_page.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  backgroundColor: 'transparent',
};

const headerStyle = {
  backgroundColor: 'transparent',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  top: 0,
  zIndex: 100,
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const navStyle = {
  display: 'flex',
  gap: '20px',
  margin: '0 30px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  fontSize: '20px',
};

const heroStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '80px',
  position: 'relative',
};

const titleDateContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyle = {
  fontSize: '96px',
  color: '#2c6fa4',
  margin: '20px 20px 0',
};

const dateStyle = {
  marginTop: '20px',
  fontSize: '24px',
  padding: '10px 20px',
  border: '2px solid #0073e6',
  borderRadius: '50px',
  display: 'inline-block',
  color: '#0073e6',
};

const yearStyle = {
  fontSize: '96px',
  color: '#ffffff',
  margin: '0 20px',
  alignSelf: 'center',
};

export default App;
