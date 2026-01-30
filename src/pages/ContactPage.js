import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: '✉',
      title: 'Email',
      primary: 'sukhani@stanford.edu',
      secondary: 'ssukhani3@gatech.edu',
      description: 'Best way to reach me for academic collaborations and research discussions'
    },
    {
      icon: '📱',
      title: 'Professional Networks',
      primary: 'LinkedIn',
      secondary: 'Google Scholar',
      description: 'Connect with me on professional platforms'
    },
    {
      icon: '📍',
      title: 'Location',
      primary: 'Stanford, CA (Current)',
      secondary: 'Mumbai • Jaipur • Cairns • Atlanta • Budapest',
      description: 'Currently at Stanford, with global experience across multiple continents'
    }
  ];

  const socialPlatforms = [
    {
      name: 'GitHub',
      url: 'https://github.com/siddhant250803',
      icon: '💻',
      description: 'Code repositories, projects, and open-source contributions'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/siddhantsukhani/',
      icon: '💼',
      description: 'Professional network and career updates'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=VAwr1v8AAAAJ&hl=en',
      icon: '📚',
      description: 'Research publications and academic citations'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/SukhaniSid29825',
      icon: '🐦',
      description: 'Thoughts on math, finance, and technology'
    }
  ];

  const collaborationAreas = [
    {
      title: 'Quantitative Finance Research',
      description: 'Mathematical modeling, risk analysis, and algorithmic trading strategies',
      skills: ['Stochastic Calculus', 'Monte Carlo Methods', 'Risk Modeling']
    },
    {
      title: 'Machine Learning Projects',
      description: 'NLP, time series analysis, and financial AI applications',
      skills: ['PyTorch', 'TensorFlow', 'Financial ML', 'NLP']
    },
    {
      title: 'Academic Collaboration',
      description: 'Research papers, dataset creation, and conference presentations',
      skills: ['Research Writing', 'Data Analysis', 'Statistical Modeling']
    }
  ];

  return (
    <div className="contact-page">
      <div className="mathematical-background"></div>
      
      <div className="contact-content">
        <header className="contact-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's collaborate on the future of computational finance</p>
          <div className="header-equation">
            ∑(collaboration + innovation) = breakthrough
          </div>
        </header>

        <section className="contact-methods">
          <h2 className="section-title">
            <span className="section-symbol">📞</span>
            Contact Methods
          </h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-primary">{method.primary}</p>
                <p className="method-secondary">{method.secondary}</p>
                <p className="method-description">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="social-section">
          <h2 className="section-title">
            <span className="section-symbol">🌐</span>
            Online Presence
          </h2>
          <div className="social-grid">
            {socialPlatforms.map((platform, index) => (
              <a 
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">{platform.icon}</div>
                <h3 className="social-name">{platform.name}</h3>
                <p className="social-description">{platform.description}</p>
                <span className="social-link">Visit Profile →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="collaboration-section">
          <h2 className="section-title">
            <span className="section-symbol">🤝</span>
            Collaboration Opportunities
          </h2>
          <div className="collaboration-grid">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="collaboration-card">
                <h3 className="collaboration-title">{area.title}</h3>
                <p className="collaboration-description">{area.description}</p>
                <div className="collaboration-skills">
                  {area.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Ready to Start a Conversation?</h2>
            <p>
              Whether you're interested in quantitative finance research, machine learning applications, 
              or mathematical modeling projects, I'm always excited to discuss innovative ideas and 
              potential collaborations.
            </p>
            <div className="cta-buttons">
              <a href="mailto:sukhani@stanford.edu?subject=Collaboration%20Inquiry" className="cta-primary">
                Send Email
              </a>
              <a href="https://www.linkedin.com/in/siddhantsukhani/" target="_blank" rel="noopener noreferrer" className="cta-secondary">
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="cta-equation">
            <span className="equation-text">lim<sub>n→∞</sub> (networking + collaboration) = success</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage; 