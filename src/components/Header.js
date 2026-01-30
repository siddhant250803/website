import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span>SS</span>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/research" className="nav-link">Research</Link>
          <Link to="/diving" className="nav-link">Diving</Link>
          <a 
            href={`${process.env.PUBLIC_URL}/Siddhant_Sukhani_resume.pdf`}
            download="Siddhant_Sukhani_Resume.pdf"
            className="nav-link resume-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header; 