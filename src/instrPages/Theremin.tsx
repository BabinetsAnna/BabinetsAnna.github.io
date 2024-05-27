import React from 'react';
import { Link } from 'react-router-dom';
import thereminImg from '../assets/instruments/Theremin/Theremin.jpg';
import thereminImg1 from '../assets/instruments/Theremin/images.jpg';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Theremin: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/K6KbEnGnymk";
  const iframeUrl = 'https://sketchfab.com/3d-models/objet-theremin-dae-3ba0e6c11ac54ec2915a945d2e13390f/embed';
  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Терменвокс: Музика без дотику</h1>
          <p>
            Терменвокс (Thereminvox або просто Theremin) – це електронний музичний інструмент, винайдений у 1920-х роках. Він є одним з найстаріших електронних музичних інструментів і відомий своїм унікальним способом гри без фізичного контакту.
          </p>

          <h2>Принцип роботи Терменвокса</h2>
          <p>
            Терменвокс працює на принципі безконтактного управління. Він має дві антени - одна для регулювання висоти тону, а інша для регулювання гучності. Гравець використовує рухи рук поблизу антен для керування звуком. Рух руки навколо антени для висоти тону змінює частоту осцилятора, що відповідає висоті ноти, тоді як відстань від антени гучності визначає гучність звуку.
          </p>
          <p>
            Терменвокс складається з двох високочастотних коливальних контурів, які налаштовані на одну спільну частоту. Електричні коливання <Link to='/glossary/Звукові частоти' className='link-gloss'>звукових частот</Link> генеруються генератором на електронних лампах, а потім сигнал підсилюється і перетворюється гучномовцем у звук. Виконавець контролює Терменвокс, рухаючи руками навколо антен інструменту. Переміщенням руки біля антени він регулює висоту звуку, а жестикулюючи перед антеною, може впливати на гучність. Зміна відстані від долонь до антени змінює індуктивність коливального контуру, а отже, і частоту звуку.<Link to="/sources/source4" className='link-source'>[4]</Link>
          </p>

          <h2>Звучання Терменвокса</h2>
          <p>
            Звук Терменвокса часто описують як ефірний або надприродний, що робить його популярним у науково-фантастичній музиці та звукових доріжках до фільмів. Його звук може варіюватися від гладких, плавних мелодій до більш різких і тривожних тонів, залежно від техніки гри.
          </p>

          <h2>Використання Терменвокса</h2>
          <p>
            Терменвокс використовується в академічній, джазовій, експериментальній та кіномузиці. Він також часто з'являється в популярній музиці та культурі завдяки своєму унікальному звучанню і незвичній техніці гри.
          </p>
        </div>
        <div className='media-content'>
          <img src={thereminImg} alt='Theremin' />
          <img src={thereminImg1} alt='Theremin' />
        </div>
        <div className='videoContent'>
          <h2>Звучання терменвокса</h2>
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

export default Theremin;
