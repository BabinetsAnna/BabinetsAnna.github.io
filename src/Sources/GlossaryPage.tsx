import React from 'react';
import { useParams, Link } from 'react-router-dom';
import glossaryData from './Words';
import '../styles/Glossary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const GlossaryPage: React.FC = () => {
  const { word } = useParams<{ word?: string }>();

  if (word) {
    const glossaryItem = glossaryData.find(item => item.word === word);

    if (!glossaryItem) {
      return (
        <div className='main-gloss'>
          <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className="icon" /></Link>
          <div className='container-gloss'>
            <div>Слово не знайдено</div>
          </div>
        </div>
      );
    }

    return (
      <div className='main-gloss'>
        <Link to={`/instrument/${glossaryItem.link}`} className="back-button"><FontAwesomeIcon icon={faChevronLeft} className="icon" /></Link>
        <div className='container-gloss content-gloss'>
          <h1>{glossaryItem.word}</h1>
          <p>{glossaryItem.meaning}</p>
        </div>
      </div>
    );
  }

  // Відсортуємо слова глосарію в алфавітному порядку
  const sortedGlossaryData = glossaryData.slice().sort((a, b) => a.word.localeCompare(b.word));

  return (
    <div className='main-gloss'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className="icon" /></Link>
      <div className='container-gloss'>
        <div className='header-gloss'>
          <h1>Глосарій</h1>
        </div>
        <ul className="content-gloss">
          {sortedGlossaryData.map(item => (
            <li className="list-item-gloss" key={item.word}>
              <Link className="link-gloss" to={`/instrument/${item.link}`}>
                {item.word}
              </Link>: {item.meaning}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GlossaryPage;
