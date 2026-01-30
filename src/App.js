import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <main>
        <h1>hi, i'm siddhant</h1>
        <p className="subtitle">computational math + finance</p>
        
        <p className="bio">
          stanford mcf '26 · georgia tech '25
        </p>

        <div className="links">
          <a href="mailto:sukhani@stanford.edu">email</a>
          <a href="https://github.com/siddhant250803" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/siddhantsukhani" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://scholar.google.com/citations?user=VAwr1v8AAAAJ" target="_blank" rel="noopener noreferrer">scholar</a>
          <a href={`${process.env.PUBLIC_URL}/Siddhant_Sukhani_resume.pdf`} target="_blank" rel="noopener noreferrer">resume</a>
        </div>
      </main>
    </div>
  );
}

export default App;
