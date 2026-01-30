import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About</h2>
          
          <div className="about-simple">
            <p className="about-intro">
              Senior at Georgia Tech studying Applied Mathematics and Computational Data Analysis. 
              Research focus on AI applications in quantitative finance and NLP.
            </p>
            
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-label">Education</span>
                <span className="highlight-value">Stanford • Georgia Tech (Summa Cum Laude)</span>
              </div>
              
              <div className="highlight">
                <span className="highlight-label">Current Role</span>
                <span className="highlight-value">Undergraduate Research Assistant • Financial Services Lab</span>
              </div>
            </div>
            
            <div className="about-cta">
              <Link to="/about" className="btn-primary">
                Learn More About Me →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 