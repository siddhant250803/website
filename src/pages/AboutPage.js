import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const education = [
    {
      degree: "Master of Science in Mathematical Computational Engineering",
      institution: "Stanford University",
      period: "2025-2027",
      focus: "Mathematical Computational Finance Track • Institute of Mathematical Computational Engineering"
    },
    {
      degree: "Bachelor of Science in Applied Mathematics and Computational Data Analysis",
      institution: "Georgia Institute of Technology",
      period: "2022-2025",
      focus: "CGPA: 3.96/4.0 • Expected Graduation: December 2025",
      coursework: "Analysis (Real, Complex, Numerical), Abstract Algebra, Computational Data Analysis (ML, AI), Data Structures & Computer Programming, Number Theory, Financial Markets and Structures, Probability & Statistics, Optimization"
    }
  ];

  const experience = [
    {
      title: "Undergraduate Research Assistant",
      organization: "Financial Services Lab, Georgia Institute of Technology",
      period: "May 2024 - Present",
      location: "Atlanta, GA",
      description: "Constructing global monetary policy networks using advanced graph techniques to simulate FX market dynamics. Managing team of 80 annotators for sentiment and temporal analysis across 20 central banks."
    },
    {
      title: "Quantitative Researcher",
      organization: "Prabhudas Liladhar",
      period: "January 2024 - July 2024",
      location: "Remote",
      description: "Developed 5-layer mutual fund analyzer using advanced statistical and econometric models, improving analytical systems by 22%. Generated novel trading strategies and machine-learning-based tools achieving 13.5% alpha."
    },
    {
      title: "Honors Undergraduate Teaching Assistant",
      organization: "Mathematics Department, Georgia Institute of Technology",
      period: "August 2023 - Present",
      location: "Atlanta, GA",
      description: "Conducted biweekly sessions teaching honors-level differential equations and multivariable calculus to 50+ students."
    }
  ];

  const publications = [
    {
      title: "SubjECTive-QA: Measuring Subjectivity in Earnings Call Transcripts' QA Through Six-Dimensional Feature Analysis",
      venue: "NeurIPS 2024 Datasets and Benchmarks Track",
      period: "August 2023 - December 2024",
      authors: "Pardawala, H. and Sukhani, S. et al.",
      awards: ["President's Undergraduate Research Award", "College of Sciences Award", "Student Government Award"]
    },
    {
      title: "The FinNLP Gap: A Deep Dive into Missing Metrics, Tasks, and Data",
      venue: "Under review at NAACL",
      period: "June 2024 - Present",
      description: "In-depth analysis of financial AI trends using 400 papers from ACL Anthology"
    }
  ];

  const research = [
    {
      title: "Global Financial Monetary Policy Network",
      period: "August 2024 - Present",
      description: "Managed team of 80 annotators to label 20 central bank monetary policy statements for sentiment and temporal analysis."
    },
    {
      title: "Backtrading Framework and Algorithmic Trading Strategy Development",
      period: "May 2024 - Present",
      description: "Developed backtrading engine for financial analysis and computed risk metrics for trading strategies."
    }
  ];

  const skills = {
    programming: ["Python", "R", "C", "Java", "SQL", "MATLAB", "SAS"],
    libraries: ["PyTorch/TensorFlow", "scikit-learn", "QuantLib", "Backtrader", "Transformers"],
    tools: ["Power BI", "Tableau"],
    languages: ["English (Native)", "French (Professional)", "Hindi (Native)"],
    certifications: ["Karate Black Belt (DAN II)", "PADI Divemaster", "Emergency First Responder"]
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <header className="about-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Academic Background, Research & Professional Experience</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">
            I'm a senior at Georgia Institute of Technology pursuing a Bachelor of Science in Applied Mathematics 
            and Computational Data Analysis with a 3.96 CGPA. Starting Fall 2025, I'll be pursuing a Master's in 
            Mathematical Computational Engineering at Stanford University, specializing in Mathematical Computational Finance.
          </p>
          <p className="intro-text">
            My research focuses on the intersection of AI, mathematics, and finance, with particular expertise in 
            natural language processing, quantitative finance, and algorithmic trading systems. Currently working as 
            an Undergraduate Research Assistant at the Financial Services Lab, where I construct global monetary 
            policy networks and simulate FX market dynamics.
          </p>
        </section>

        <div className="content-grid">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{edu.period}</span>
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <p className="timeline-organization">{edu.institution}</p>
                    <p className="timeline-focus">{edu.focus}</p>
                    <div className="coursework">
                      <strong>Relevant Coursework:</strong> {edu.coursework}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-organization">{exp.organization}</p>
                    <p className="timeline-location">{exp.location}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="section">
          <h2 className="section-title">Publications</h2>
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-venue">{pub.venue}</p>
                <p className="pub-period">{pub.period}</p>
                {pub.authors && <p className="pub-authors">{pub.authors}</p>}
                {pub.description && <p className="pub-description">{pub.description}</p>}
                {pub.awards && (
                  <div className="pub-awards">
                    <strong>Awards:</strong> {pub.awards.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Research Projects</h2>
          <div className="research-grid">
            {research.map((proj, index) => (
              <div key={index} className="research-card">
                <h3 className="research-title">{proj.title}</h3>
                <p className="research-period">{proj.period}</p>
                {proj.pis && <p className="research-pis"><strong>PIs:</strong> {proj.pis}</p>}
                <p className="research-description">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Libraries & Frameworks</h3>
              <div className="skills-list">
                {skills.libraries.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Certifications</h3>
              <div className="skills-list">
                {skills.certifications.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <p>Passionate about advancing the intersection of mathematics, finance, and artificial intelligence through rigorous research and practical applications.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage; 