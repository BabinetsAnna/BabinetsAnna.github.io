import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Glossary.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const sources = [
  { id: 'source1', text: 'Звук та його характеристики. Види звуків і вплив їх на живі організми.', url: 'https://naurok.com.ua/urok-zvuk-ta-yogo-harakteristiki-vidi-zvukiv-i-vpliv-h-na-zhivi-organizmi-271960.html' },
  { id: 'source2', text: 'All about Otamatone.', url: 'https://otamatone.jp/en/about/' },
  { id: 'source3', text: 'Ken Moore. Kalimba.', url: 'https://www.metmuseum.org/articles/kalimba' },
  { id: 'source4', text: 'Musical instruments, historic, rare and unique the selection, introduction and descriptive notes. 2018. 242 p.' },
  { id: 'source5', text: 'Moore M. Finding your forte A guide to discovering unusual musical instruments. 2023. 42 p.' },
  { id: 'source6', text: 'React: офіційна документація.', url: 'https://react.dev/' },
  { id: 'source7', text: 'Musical Instuments models. Sketchfab.', url: 'https://sketchfab.com/search?q=musical+instruments&type=models' },
  { id: 'source8', text: 'The Jaw Harp (jew’s harp or mouth harp). Archaicroots.', url: 'https://www.archaicroots.com/education/the-cross-cultural-jaw-harp-jews-harp-or-mouth-harp/' },
  { id: 'source9', text: 'The kazoo – its "physics", history, and importance for modern music.', url: 'https://kazoos.com/pages/the-kazoo-its-physics-history-and-importance-for-modern-music' },
  { id: 'source10', text: 'TypeScript: офіційна документація.', url: 'https://www.typescriptlang.org/docs/handbook/react.html' }
];

const SourceList: React.FC = () => {
  const { sourceid } = useParams<{ sourceid?: string }>();
  const navigate = useNavigate();

  return (
    <div className='main-gloss'>
      <div onClick={() => navigate(-1)} className="back-button">
        <FontAwesomeIcon icon={faChevronLeft} className="icon" /> 
      </div>
      <div className='container-gloss'>
      <div className='header-gloss'>
        <h1>Список використаних джерел</h1></div>
        <ol className="content-gloss">
          {sources.map((source) => (
            <li key={source.id} id={source.id} style={{ border: sourceid === source.id ? '2px solid #70A0AF' : 'none', padding: '4px'  }}>
              {source.text} {source.url && <a href={source.url} target="_blank" rel="noopener noreferrer">URL: {source.url}</a>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SourceList;
