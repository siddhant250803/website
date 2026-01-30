import React from 'react';
import './ResearchPage.css';

const ResearchPage = () => {
  const featuredProjects = [
    {
      title: "SubjECTive-QA",
      subtitle: "NeurIPS Datasets and Benchmarks 2024",
      period: "Aug 2023 - Dec 2024",
      status: "Published",
      description: "Measuring Subjectivity in Earnings Call Transcripts' QA Through Six-Dimensional Feature Analysis",
      authors: "Pardawala, H., Sukhani, S., Shah, A., Kejriwal, V., Pillai, A., Bhasin, R., DiBiasio, A., Mandapati, T., Adha, D., & Chava, S.",
      awards: ["President's Undergraduate Research Award", "College of Sciences Award", "Student Government Award"],
      technologies: ["Natural Language Processing", "Financial Text Analysis", "Machine Learning", "Statistical Analysis"],
      mathematicalFoundation: "Six-dimensional feature space analysis using vector embeddings and statistical correlation methods",
      impact: "Novel benchmark for measuring subjectivity in financial communications",
      link: "#"
    },
    {
      title: "Language Modeling for the Future of Finance",
      subtitle: "Conference on Language Modeling (CoLM) - Under Review",
      period: "June 2024 - Present",
      status: "Under Review",
      description: "Comprehensive analysis of financial AI landscape through large-scale data mining and taxonomy development",
      methodology: [
        "Scraped 400 papers from ACL Anthology using Selenium",
        "Applied financial criteria filtering to synthesize initial taxonomy",
        "Analyzed and segregated papers based on methodologies, tasks, data years, sources, metrics, code availability, funding",
        "Conducted quantitative and qualitative analysis of financial AI space over 7 years"
      ],
      technologies: ["Web Scraping", "Data Mining", "Taxonomy Development", "Literature Analysis", "Selenium"],
      mathematicalFoundation: "Statistical analysis of research trends and methodological evolution in computational finance",
      impact: "First comprehensive taxonomy of financial AI research landscape",
      link: "#"
    },
    {
      title: "Words That Unite The World",
      subtitle: "Neural Information Processing Systems D&B 2025 - Submitted",
      period: "Aug 2024 - Present",
      status: "Submitted",
      description: "Large-scale analysis of global monetary policy communications using advanced NLP techniques",
      methodology: [
        "Scraped monetary policy communications from 27 central banks across 28 years (380k total sentences)",
        "Analyzed and annotated 25k sentences and developed 133 page annotation guide (unique for each bank)",
        "Evaluated 16 LMs over 15,075 benchmarking experiments with zero shot, few shot & annotation guide prompting",
        "Conducted Agentic meeting minute generation and economic analysis with inflation based data"
      ],
      technologies: ["Large Language Models", "Data Mining", "Economic Analysis", "Cross-lingual NLP", "Time Series Analysis"],
      mathematicalFoundation: "Multi-dimensional analysis of linguistic patterns across temporal and geographical dimensions",
      impact: "233-page comprehensive study bridging NLP and monetary policy analysis",
      link: "#"
    }
  ];

  return (
    <div className="research-page">
      <div className="research-content">
        <header className="research-header">
          <h1 className="page-title">Research</h1>
          <p className="page-subtitle">Computational Finance & Mathematical Engineering</p>
        </header>

        <section className="section featured-projects">
          <h2 className="section-title">Research & Publications</h2>
          <div className="projects-timeline">
            {featuredProjects.map((project, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className={`status-indicator ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status === 'Published' ? '✓' : 
                     project.status === 'Under Review' ? '⋯' : 
                     project.status === 'Submitted' ? '→' : '○'}
                  </div>
                </div>
                
                <div className="timeline-content">
                  <div className="project-meta">
                    <span className="project-period">{project.period}</span>
                    <span className="project-status-text">{project.status}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  
                  {project.authors && (
                    <div className="project-detail">
                      <span className="detail-label">Authors:</span>
                      <span className="detail-text">{project.authors}</span>
                    </div>
                  )}

                  {project.awards && (
                    <div className="project-detail">
                      <span className="detail-label">Awards:</span>
                      <span className="detail-text">{project.awards.join(', ')}</span>
                    </div>
                  )}

                  <div className="project-detail">
                    <span className="detail-label">Technologies:</span>
                    <div className="tech-list">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-item">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-detail">
                    <span className="detail-label">Impact:</span>
                    <span className="detail-text">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="research-footer">
          <p>Exploring the intersection of mathematics, finance, and artificial intelligence</p>
        </footer>
      </div>
    </div>
  );
};

export default ResearchPage; 