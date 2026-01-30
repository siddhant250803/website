import React from 'react';
import './DivingPage.css';
import DiveMap from '../components/DiveMap';

const DivingPage = () => {
  const diveStats = [
    { label: "Total Dives", value: "75+" },
    { label: "Certification", value: "PADI Divemaster" },
    { label: "Countries", value: "9" },
    { label: "Specializations", value: "5" },
    { label: "Max Depth", value: "40m" }
  ];

  const specializations = [
    "Deep Diving",
    "Wreck Diving", 
    "Night Diving",
    "Underwater Navigation",
    "Peak Performance Buoyancy"
  ];

  return (
    <div className="diving-page">
      <div className="diving-content">
        <header className="diving-header">
          <h1 className="page-title">Diving</h1>
          <p className="page-subtitle">Underwater Adventures & Marine Conservation</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">
            PADI Divemaster with 75+ logged dives across 9 countries. Passionate about marine conservation 
            and underwater exploration, with 5 specializations covering deep water, wreck, and technical diving.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Diving Statistics</h2>
          <div className="stats-grid">
            {diveStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Specializations</h2>
          <div className="specializations-grid">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-item">
                <span className="spec-icon">🤿</span>
                <span className="spec-name">{spec}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Coolest Sighting</h2>
          <div className="coolest-sighting">
            <div className="sighting-card">
              <h3 className="sighting-title">Critically Endangered Scalloped Hammerhead Sharks</h3>
              <p className="sighting-description">
                An incredible encounter with a school of critically endangered scalloped hammerhead sharks. 
                These magnificent predators, known for their distinctive head shape and schooling behavior, 
                represent one of the ocean's most threatened species. Witnessing them in their natural habitat 
                was both humbling and a powerful reminder of the importance of marine conservation efforts.
              </p>
              <div className="conservation-note">
                <strong>Conservation Status:</strong> Critically Endangered (IUCN Red List)
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Dive Locations Map</h2>
          <div className="map-container">
            <DiveMap />
            <p className="map-note">Exploring 9 countries across diverse marine ecosystems</p>
          </div>
        </section>

        <footer className="diving-footer">
          <p className="footer-quote">
            "The sea, once it casts its spell, holds one in its net of wonder forever." - Jacques Cousteau
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DivingPage; 