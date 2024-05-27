import React from 'react';
import { Link } from 'react-router-dom';
import jawHarpImg1 from '../assets/instruments/jews_harp/Jew\'s_harp.jpg';
import jawHarpImg2 from '../assets/instruments/jews_harp/drimba.jpeg';
import jawHarpImg3 from '../assets/instruments/jews_harp/images.jpg';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const JewHarp: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/Ptew7O-oB34";
  const iframeUrl = 'https://sketchfab.com/3d-models/altay-jews-harp-aa8ee8503c8844b3b8da64803a827024/embed';
  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Дримба: Старовинний музичний інструмент</h1>
          <p>
            Дримба (варган) — це старовинний музичний інструмент, який належить до групи самозвучних ідіофонів. Вона має просту конструкцію, але здатна створювати багатий спектр звуків і тембрів.
          </p>

          <h2>Конструкція дримби</h2>
          <p>
            Дримба складається з двох основних частин:
          </p>
          <ul>
            <li><b>Рама:</b> Зазвичай виготовлена з металу або дерева. Це нерухома частина інструменту, яку виконавець тримає в руках або притискає до зубів.</li>
            <li><b>Язичок (мовець):</b> Тонка пружна пластина з металу, закріплена одним кінцем до рами. Вона вільно коливається під впливом удару.</li>
          </ul>

          <h2>Принцип дії дримби</h2>
          <p>
            Звук на дримбі створюється вібрацією язичка. Виконавець ударяє пальцем або іншими частинами руки по вільному кінцю язичка, приводячи його в коливальний рух. Ці коливання передаються через раму до ротової порожнини виконавця, яка виступає як резонатор, підсилюючи і змінюючи тембр звуку.
          </p>

          <h2>Поширення звуку в дримбі</h2>
          <p>
            Звук в дримбі поширюється через резонанс у ротовій порожнині виконавця. Основний тон, створений язичком, доповнюється гармонійними <Link to='/glossary/Обертони' className='link-gloss'>обертонами</Link>, які підсилюються і модифікуються ротовою порожниною.
          </p>

          <h2>Діапазон звучання дримби</h2>
          <p>
            Дримба має обмежений діапазон основного тону, який залежить від довжини, товщини і матеріалу язичка. Зазвичай основний тон дримби знаходиться в межах від 100 до 1000 Гц. Однак завдяки гармонійним обертонам і можливості змінювати форму ротової порожнини, виконавець може створювати широкий спектр звуків, які значно розширюють її діапазон.<Link to="/sources/source8" className='link-source'>[8]</Link>
          </p>
        </div>
        <div className='media-content'>
          <img src={jawHarpImg1} alt='Jaw Harp' />
          <img src={jawHarpImg2} alt='Jaw Harp' />
          <img src={jawHarpImg3} alt='Jaw Harp' />
        </div>
      </div>
      <div className='videoContent'>
        <h2>Дримба. Карпатська мелодія.</h2>
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
  );
};

export default JewHarp;
