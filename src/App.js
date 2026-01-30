import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import DivingPage from './pages/DivingPage';

function App() {
  return (
    <ThemeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            {/* Home page with simplified sections */}
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            } />
            
            {/* Detailed separate pages */}
            <Route path="/about" element={
              <>
                <Header />
                <AboutPage />
                <Footer />
              </>
            } />
            
            <Route path="/research" element={
              <>
                <Header />
                <ResearchPage />
                <Footer />
              </>
            } />
            
            <Route path="/contact" element={
              <>
                <Header />
                <ContactPage />
                <Footer />
              </>
            } />
            
            <Route path="/diving" element={
              <>
                <Header />
                <DivingPage />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
