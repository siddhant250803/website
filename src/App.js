import React, { useState } from 'react';
import './App.css';

const projects = [
  { name: 'SubjECTive-QA', desc: 'NeurIPS 2024 - Measuring subjectivity in earnings call transcripts through six-dimensional feature analysis', link: 'https://proceedings.neurips.cc/paper_files/paper/2024/hash/6d0f9c415e2d779c78f32b74668e9d02-Abstract-Datasets_and_Benchmarks_Track.html' },
  { name: 'World Central Banks', desc: 'Global monetary policy analysis - 380k sentences from 27 central banks, 28 years of data', link: 'https://gcb-web-bb21b.web.app/' },
  { name: 'FinNLP Survey', desc: 'Language Modeling for the Future of Finance - survey of 400+ papers from ACL Anthology', link: 'https://arxiv.org/abs/2504.07274' },
  { name: 'FinCap', desc: 'ICCV 2025 - Topic-aligned captions for short-form financial YouTube videos using multimodal LLMs', link: 'https://arxiv.org/abs/2509.25745' },
  { name: 'Multi-Asset Dynamic Portfolio', desc: 'Quantitative trading strategy with 24.5% CAGR (14.5% alpha) across equities, debt, and commodities', link: null },
  { name: 'Data Pipeline', desc: 'End-to-end adaptive data pipeline for a quantitative research hedge fund using Cron, Selenium, and MongoDB', link: null },
  { name: 'Backtrading Engine', desc: 'Advanced backtesting framework with Monte Carlo simulations and stress testing for trading strategies', link: null },
  { name: 'Mutual Fund Analyzer', desc: 'Five-layer mutual fund attribution model using statistical and econometric methods - 13.5% alpha generation', link: null },
];

function App() {
  const [popup, setPopup] = useState(null);

  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      setPopup(project);
    }
  };

  return (
    <div className="app">
      <main>
        <h1>hi, i'm siddhant</h1>
        <p className="subtitle">computational math + finance</p>
        <p className="bio"><a href="https://zettaquant.ai" target="_blank" rel="noopener noreferrer">zettaquant</a> · stanford mcf '26 · georgia tech '25 · <a href="https://stvp.stanford.edu/alp/" target="_blank" rel="noopener noreferrer">accel fellow</a></p>

        <div className="links">
          <a href="mailto:sukhani@stanford.edu">email</a>
          <a href="https://github.com/siddhant250803" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/siddhantsukhani" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://scholar.google.com/citations?user=VAwr1v8AAAAJ" target="_blank" rel="noopener noreferrer">scholar</a>
          <a href={`${process.env.PUBLIC_URL}/Siddhant_Sukhani_resume.pdf`} target="_blank" rel="noopener noreferrer">resume</a>
        </div>

        <div className="stuff">
          <p className="stuff-label">stuff</p>
          <div className="projects">
            {projects.map((p, i) => (
              <span 
                key={i} 
                className={`project ${p.link ? 'has-link' : ''}`}
                onClick={() => handleProjectClick(p)}
              >
                {p.name}{i < projects.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
        </div>
      </main>

      {popup && (
        <div className="popup-overlay" onClick={() => setPopup(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setPopup(null)}>×</button>
            <h3>{popup.name}</h3>
            <p>{popup.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
