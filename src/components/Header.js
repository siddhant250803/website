import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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