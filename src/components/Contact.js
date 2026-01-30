import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '✉',
      title: 'Email',
      value: 'sukhani@stanford.edu',
      link: 'mailto:sukhani@stanford.edu'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Stanford, CA, USA • Mumbai, India • Jaipur, India • Cairns, Australia • Atlanta, USA • Budapest, Hungary',
      link: null
    }
  ];

  const socialPlatforms = [
    {
      name: 'GitHub',
      url: 'https://github.com/siddhant250803',
      description: 'Code Repositories & Projects'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/siddhantsukhani/',
      description: 'Professional Network & Experience'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=VAwr1v8AAAAJ&hl=en',
      description: 'Research Publications & Citations'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/SukhaniSid29825',
      description: 'Thoughts & Updates'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and collaborate</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-grid">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <h4>{contact.title}</h4>
                    {contact.link ? (
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        {contact.value}
                      </a>
                    ) : (
                      <span>{contact.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-links">
            <h3>Connect Online</h3>
            <div className="social-grid">
              {socialPlatforms.map((platform, index) => (
                <a 
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <h4>{platform.name}</h4>
                  <p>{platform.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-cta">
            <h3>Ready to Collaborate?</h3>
            <p>
              Whether you're interested in quantitative finance research, machine learning applications, 
              or mathematical modeling projects, I'm always open to meaningful collaborations and discussions.
            </p>
            <a href="mailto:sukhani@stanford.edu" className="cta-button">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 