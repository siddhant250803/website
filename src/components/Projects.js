import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Asset Dynamic Portfolio (MADP)',
      category: 'Quantitative Trading Strategy',
      tech: ['Quantitative Finance', 'Factor Modeling', 'Backtesting', 'Risk Management'],
      description: 'Developing quantitative trading strategy to dynamically allocate funds between equities, debt and commodities. Integrating regressive factor modeling and backtrading with stress testing to generate 24.5% CAGR (14.5% alpha).',
      link: '#'
    },
    {
      title: 'End-to-End Adaptive Data-Pipeline Design & Implementation',
      category: 'Data Engineering & Automation',
      tech: ['Python', 'Cron', 'Selenium', 'MongoDB', 'Data Pipeline'],
      description: 'Freelancing with quantitative research hedge fund to automate data pipeline using Cron, Selenium and MongoDB. Building scalable, adaptive infrastructure for real-time financial data processing and analysis.',
      link: '#'
    },
    {
      title: 'SubjECTive-QA Dataset',
      category: 'NLP Research',
      tech: ['Python', 'NLP', 'Machine Learning'],
      description: 'Published at NeurIPS 2024 Datasets and Benchmarks track. Measuring subjectivity in earnings call transcripts through six-dimensional feature analysis. Recipient of President\'s Undergraduate Research Award.',
      link: 'https://arxiv.org/abs/2410.20651'
    },
    {
      title: 'World Central Banks',
      category: 'Financial Data Platform',
      tech: ['Web Development', 'Financial Data', 'Analytics'],
      description: 'Global monetary policy network platform analyzing central bank statements. Managing 80 annotators for sentiment and temporal analysis across 20 central banks worldwide.',
      link: 'https://gcb-web-bb21b.web.app/'
    },
    {
      title: 'Language Modeling for the Future of Finance: A Quantitative Survey',
      category: 'NLP Research',
      tech: ['NLP', 'Finance', 'Survey Research'],
      description: 'Comprehensive survey analyzing 400+ papers from ACL Anthology on financial AI trends. Currently under review at NAACL. Deep dive into missing metrics, tasks, and data in FinNLP.',
      link: 'https://arxiv.org/abs/2504.07274'
    },
    {
      title: 'S1 Filings Parsing',
      category: 'Financial Data Processing',
      tech: ['Python', 'NLP', 'SEC Filings'],
      description: 'Advanced parsing system for extracting and analyzing structured data from S1 SEC filings using natural language processing and financial document analysis techniques.',
      link: '#'
    },
    {
      title: 'Financial Video Captioning',
      category: 'Multimodal AI',
      tech: ['Computer Vision', 'NLP', 'Deep Learning'],
      description: 'Automated system for generating accurate captions and transcripts for financial video content using multimodal AI approaches and domain-specific financial terminology.',
      link: '#'
    },
    {
      title: 'Backtrading Engine with Stress Testing',
      category: 'Algorithmic Trading',
      tech: ['Python', 'Backtesting', 'Risk Management'],
      description: 'Advanced backtesting framework developed under Dr. Sudheer Chava and Sampath Routu. Comprehensive stress testing capabilities and risk metrics computation for trading strategies.',
      link: '#'
    },
    {
      title: 'Mutual Fund Attribution Model',
      category: 'Financial Analysis',
      tech: ['Finance', 'Data Analysis', 'Python'],
      description: 'Developed 5-layer mutual fund analyzer using advanced statistical and econometric models at Prabhudas Liladhar. Improved analytical systems by 22% and generated 13.5% alpha.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects & Research</h2>
          <p className="section-subtitle">Computational mathematical engineering and financial AI portfolio</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {(project.link && project.link !== '#') && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 