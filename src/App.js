import React, { useState, useEffect } from 'react';
import './App.css';

const categories = [
  {
    label: 'research',
    items: [
      { name: 'SubjECTive-QA', desc: 'A human-annotated dataset of 49,446 long-form QA pairs from earnings call transcripts, annotated across six subjective dimensions: Assertive, Cautious, Optimistic, Specific, Clear, and Relevant. RoBERTa-base and Llama-3-70b-Chat perform similarly on lower-subjectivity features but diverge on higher-subjectivity ones. Models achieve ~66% weighted F1 on White House press briefings, suggesting cross-domain applicability.', tag: 'NeurIPS 2024', link: 'https://proceedings.neurips.cc/paper_files/paper/2024/hash/6d0f9c415e2d779c78f32b74668e9d02-Abstract-Datasets_and_Benchmarks_Track.html' },
      { name: 'World Central Banks', desc: 'The most comprehensive monetary policy corpus to date — 380k+ sentences from 25 central banks across diverse geographic regions, spanning 28 years. Defines three analysis tasks: Stance Detection, Temporal Classification, and Uncertainty Estimation. A model trained on aggregated cross-bank data significantly outperforms one trained on any individual bank, demonstrating the value of unified cross-institutional analysis.', tag: 'NeurIPS 2025', link: 'https://gcb-web-bb21b.web.app/' },
      { name: 'FinNLP Survey', desc: 'A systematic review of 374 NLP papers published between 2017 and 2024 across 38 conferences and workshops, with focused analysis of 221 finance-related papers evaluated across 11 dimensions. Identifies four key opportunities: expanding forecasting task scope, enriching evaluation with financial metrics, leveraging multilingual and crisis-period datasets, and balancing PLMs with efficient or interpretable alternatives.', tag: 'survey', link: 'https://arxiv.org/abs/2504.07274' },
      { name: 'FinCap', desc: 'Evaluates multimodal LLMs for topic-aligned captioning of financial short-form videos by testing joint reasoning over transcripts, audio, and video across 624 annotated YouTube videos and five topics. Video alone performs strongly on four of five topics; selective pairs like TV or AV often surpass full TAV, implying additional modalities can introduce noise. Establishes the first baselines for financial short-form video captioning.', tag: 'ICCV 2025', link: 'https://arxiv.org/abs/2509.25745' },
    ],
  },
  {
    label: 'writings',
    items: [
      { name: 'Volatility Surface Optimal Transport', desc: 'Treats the vol surface as a moving probability distribution. Wasserstein distances show that distributional instability predicts when realized variance exceeds implied, and the gap between risk-neutral and physical distributions acts as a regime indicator — converging during stress when markets revise beliefs most rapidly.', tag: 'substack', link: 'https://substack.com/home/post/p-189936177', code: 'https://github.com/siddhant250803/vol-surface-opt-trans' },
    ],
  },
  {
    label: 'projects',
    items: [
      { name: 'Multi-Asset Dynamic Portfolio', desc: 'Quantitative trading strategy with 24.5% CAGR (14.5% alpha) across equities, debt, and commodities', tag: 'quant', link: null },
      { name: 'Data Pipeline', desc: 'End-to-end adaptive data pipeline for a quantitative research hedge fund using Cron, Selenium, and MongoDB', tag: 'infra', link: null },
      { name: 'Backtrading Engine', desc: 'Advanced backtesting framework with Monte Carlo simulations and stress testing for trading strategies', tag: 'quant', link: null },
      { name: 'Mutual Fund Analyzer', desc: 'Five-layer mutual fund attribution model using statistical and econometric methods — 13.5% alpha generation', tag: 'finance', link: null },
    ],
  },
  {
    label: 'math',
    items: [],
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selected, setSelected] = useState(null);
  const [panelVisible, setPanelVisible] = useState(false);

  const handleCategoryClick = (label) => {
    const cat = categories.find((c) => c.label === label);
    if (cat?.items.length === 0) return;
    if (activeCategory === label) {
      setActiveCategory(null);
      closePanel();
    } else {
      setActiveCategory(label);
      closePanel();
    }
  };

  const handleItemClick = (item) => {
    if (selected?.name === item.name) {
      closePanel();
    } else {
      setSelected(item);
      requestAnimationFrame(() => setPanelVisible(true));
    }
  };

  const closePanel = () => {
    setPanelVisible(false);
    setTimeout(() => setSelected(null), 300);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (selected) closePanel();
        else setActiveCategory(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selected]);

  const activeItems = categories.find((c) => c.label === activeCategory)?.items ?? [];

  return (
    <div className="app">
      <main>
        <h1>hi, i'm siddhant</h1>
        <p className="subtitle">computational math + finance</p>
        <p className="bio">
          <a href="https://zettaquant.ai" target="_blank" rel="noopener noreferrer">zettaquant</a>
          {' · '}stanford icme '27 · georgia tech '25 ·{' '}
          <a href="https://stvp.stanford.edu/alp/" target="_blank" rel="noopener noreferrer">accel fellow</a>
        </p>

        <div className="links">
          <a href="mailto:sukhani@stanford.edu">email</a>
          <a href="https://github.com/siddhant250803" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/siddhantsukhani" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://scholar.google.com/citations?user=VAwr1v8AAAAJ" target="_blank" rel="noopener noreferrer">scholar</a>
          <a href={`${process.env.PUBLIC_URL}/Siddhant_Sukhani_resume.pdf`} target="_blank" rel="noopener noreferrer">resume</a>
          <a href="https://substack.com/@siddhantsukhani" target="_blank" rel="noopener noreferrer">thoughts</a>
        </div>

        <div className="stuff">
          <div className="cat-nav">
            {categories.map((cat, i) => (
              <React.Fragment key={cat.label}>
                <span
                  className={`cat-name ${activeCategory === cat.label ? 'active' : ''} ${cat.items.length === 0 ? 'disabled' : ''}`}
                  onClick={() => handleCategoryClick(cat.label)}
                >
                  {cat.label}
                </span>
                {i < categories.length - 1 && <span className="dot"> · </span>}
              </React.Fragment>
            ))}
          </div>

          <div className={`items-row ${activeCategory ? 'visible' : ''}`}>
            {activeItems.length === 0 && activeCategory ? (
              <span className="item-empty">—</span>
            ) : (
              activeItems.map((item, i) => (
                <React.Fragment key={item.name}>
                  <span
                    className={`item ${selected?.name === item.name ? 'active' : ''}`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.name}
                  </span>
                  {i < activeItems.length - 1 && <span className="dot"> · </span>}
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </main>

      {selected && (
        <div className={`backdrop ${panelVisible ? 'visible' : ''}`} onClick={closePanel} />
      )}

      <div className={`panel ${panelVisible ? 'open' : ''}`}>
        <button className="panel-close" onClick={closePanel}>×</button>
        {selected && (
          <div className="panel-content">
            <span className="panel-cat">{activeCategory}</span>
            <h2 className="panel-title">{selected.name}</h2>
            <p className="panel-desc">{selected.desc}</p>
            <div className="panel-footer">
              <span className="panel-tag">{selected.tag}</span>
              <div className="panel-actions">
                {selected.code && (
                  <a href={selected.code} target="_blank" rel="noopener noreferrer" className="panel-link">
                    code →
                  </a>
                )}
                {selected.link && (
                  <a href={selected.link} target="_blank" rel="noopener noreferrer" className="panel-link">
                    view →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
