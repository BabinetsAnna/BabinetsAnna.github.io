import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import HomePage from './mainScr/HomePage';
import Start from './mainScr/StartScreen';
import Glossary from './Sources/GlossaryPage';
import Sources from './Sources/SourceList';
import InstrumentPage from './instrPages/InstrumentPage';
import './styles/App.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={showSplash ? <SplashScreen /> : <HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/start" element={<Start />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/glossary/:word" element={<Glossary />} />
          <Route path="/sources" element={<Sources/>} />
          <Route path="/sources/:sourceid" element={<Sources/>} />
          <Route path="/instrument/:name" element={<InstrumentPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
