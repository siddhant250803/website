import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Siddhant Sukhani</h3>
            <p>Computational Mathematical Engineer</p>
            <p>Stanford University</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><button onClick={scrollToTop}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com/siddhant250803" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/siddhantsukhani/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://scholar.google.com/citations?user=VAwr1v8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
                <li><a href="mailto:sukhani@stanford.edu">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Siddhant Sukhani. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 