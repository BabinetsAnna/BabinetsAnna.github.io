import React from 'react';
import { Link } from 'react-router-dom';
import otamatoneImg1 from '../assets/instruments/otamatone/otamotone.webp';
import otamatoneImg2 from '../assets/instruments/otamatone/otamotone1.jpg';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Otamatone: React.FC = () => {
    
  const videoUrl = "https://www.youtube.com/embed/-t2SojpCxH0";
  const iframeUrl = 'https://sketchfab.com/3d-models/otamatone-141aca7930464f39817b7c69d770e4a0/embed';

  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Отаматон: Синтезатор чи іграшка?</h1>
          <p>
            Отаматон – це японський електронний музичний інструмент, який нагадує комічний мікс між <Link to='/glossary/Синтезатор' className='link-gloss'>синтезатором</Link> і плюшевою іграшкою.
          </p>

          <h2>Принцип роботи Отаматона</h2>
          <p>
            Отаматон має форму прямокутної пластикової панелі з невеликим силіконовим "тілом" і "головою", що нагадує <Link to='/glossary/Нота' className='link-gloss'>музичний нотний знак</Link>. Він має сенсорну поверхню, на яку можна натискати, щоб виробляти звуки. Коли ви натискате на "голову" і переміщаєте пальці по сенсорній панелі, цей інструмент відтворює різні музичні ноти.<Link to="/sources/source2" className='link-source'>[2]</Link>
          </p>

          <h2>Звук Отаматона</h2>
          <p>
            Звук Отаматона може бути порівняний з голосом або синтезатором. Він може відтворювати різні <Link to='/glossary/Тембр' className='link-gloss'>тембри</Link> та ноти, залежно від того, як ви користуєтеся ним.
          </p>

          <h2>Використання Отаматона</h2>
          <p>
            Отаматон часто використовується для розваг. Він може бути використаний як інструмент для вивчення основ музики, для виконання простих мелодій або для створення ефектів звуку в записах або живих виступах. Він став популярним як курйозний подарунок і предмет колекціонування.
          </p>
        </div>
        <div className='media-content'>
          <img src={otamatoneImg1} alt='Otamatone' />
          <img src={otamatoneImg2} alt='Otamatone' />
        </div>
        <div className='videoContent'>
        <h2>Як звучить отаматон</h2>
        <iframe 
          src={videoUrl} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <iframe
        src={iframeUrl}
       
        allowFullScreen
        title="3D Model"
      ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Otamatone;
