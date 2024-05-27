import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import HomePage from './mainScr/HomePage';
import Start from './mainScr/StartScreen';
import Glossary from './Sources/GlossaryPage';
import Sources from './Sources/SourceList';

import Hydraulophone from './instrPages/Hydraulophone';
import JewHarp from './instrPages/JewHarp';
import Kalimba from './instrPages/Kalimba';
import Kazoo from './instrPages/Kazoo';
import Ocarina from './instrPages/Ocarina';
import Otamatone from './instrPages/Otamatone';
import PikassoGuitar from './instrPages/PikassoGuitar';
import Theremin from './instrPages/Theremin';
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
    
          <Route path="/Hydraulophone" element={<Hydraulophone/>} />
          <Route path="/JewHarp" element={<JewHarp/>} />
          <Route path="/Kalimba" element={<Kalimba/>} />
          <Route path="/Kazoo" element={<Kazoo/>} />
          <Route path="/Ocarina" element={<Ocarina/>} />
          <Route path="/Otamatone" element={<Otamatone/>} />
          <Route path="/PikassoGuitar" element={<PikassoGuitar/>} />
          <Route path="/Theremin" element={<Theremin/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
