import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faFileAlt, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import soundFile from '../assets/sound.mp3';
import instruments from '../instrPages/Instruments';
import '../styles/StartScreen.css';

const StartScreen: React.FC = () => {
  const iframeUrl = 'https://sketchfab.com/3d-models/boombox-space-cat-693ad5aec6bb4815a1e48fad7c07b319/embed';
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredInstruments = instruments.filter((instrument) =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInstruments = filteredInstruments.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortOrder === 'asc') {
      return nameA.localeCompare(nameB, 'uk');
    } else {
      return nameB.localeCompare(nameA, 'uk');
    }
  });

  return (
    <div className="start-screen">
      <header>
        <button className="menu-button" onClick={toggleSidebar} >
          <span className="menu-icon">☰</span>
        </button>
      
      {sidebarOpen && (
        <nav className='menu-bar'>
          <ul>
            <li><Link to="/home"  onClick={playSound}><FontAwesomeIcon icon={faHome} className ="icon"/>  Дім</Link></li>
            <li><Link to="/glossary"  onClick={playSound}><FontAwesomeIcon icon={faBook} className ="icon" />  Глосарій</Link></li>
            <li><Link to="/sources"  onClick={playSound}><FontAwesomeIcon icon={faFileAlt} className ="icon" />  Література</Link></li>
          </ul>
        
        </nav>
        
      )}
      </header>
      <div className="content">
        <div className='hdrCont'>
        <h1>Галерея</h1>
          
        <div className="filter-controls">
          <button onClick={toggleSortOrder} className='button-sort'>
            {sortOrder === 'asc' ? <FontAwesomeIcon icon={faSortAlphaDown} /> : <FontAwesomeIcon icon={faSortAlphaUp} />}
          </button>
          <input type="text" placeholder="Пошук за назвою..." value={searchTerm} onChange={handleSearchChange} className='input-search'/>
        </div>
        </div>
        <hr></hr>
        <ul className="list">
          {sortedInstruments.map((instrument, index) => (
            <li key={index} className='element-container'>
              <Link to={`/instrument/${instrument.pageName}` } onClick={playSound}>
                <img src={instrument.photoUrl} />
                <p>{instrument.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="block-two">
       <div className="text-content">
          <h2>Звук та Його Роль у Музиці</h2>
          <p>Звук є швидким коливальним рухом частинок повітря або іншого середовища, який сприймається вухом. Джерела звуку, такі як струни чи голосові зв'язки, приводяться в коливальний рух і створюють звукові хвилі, які, впливаючи на наш орган слуху, викликають відчуття звуку. У природі існує багато звуків, проте не всі вони використовуються в музиці. Звуки поділяються на музичні, які мають ясно виражену висоту і можуть бути відтворені на музичних інструментах, і немузичні (шуми), висота яких виражена непевно.</p>
           <p> Висота звуку залежить від частоти коливань: чим більша частота, тим вищий звук. Наприклад, писк комара відповідає 500-600 помахам його крилець за секунду, а дзижчання джмеля — 220 помахам. Голосові зв’язки співаків можуть створювати звуки в діапазоні від 80 до 1400 Гц, хоча зафіксовані рекорди від 44 до 2350 Гц. У телефоні для відтворення людської мови використовується смуга частот від 300 до 2000 Гц.<Link to="/sources/source1" className='link-source'>[1]</Link>
</p>
           <p> Звучання однієї і тієї ж ноти на різних музичних інструментах або голосом відрізняється тембром. Тембр визначається складними несинусоїдальними коливаннями джерела звуку, які можна спостерігати за допомогою осцилографа. Він залежить від природи та матеріальних якостей тіла, яке звучить. Несинусоїдальне коливання складається з основного тону і обертонів (гармонік).</p>
            <p>Збереження та вивчення незвичайних музичних інструментів має велике культурне та освітнє значення. Вони є свідками творчого різноманіття та інновацій людства, відображаючи історичні та культурні контексти свого часу. Мультимедійні енциклопедії надають унікальну можливість досліджувати ці інструменти в інтерактивний спосіб. Використання мультимедійних засобів, таких як зображення, відео та 3D-моделі, дозволяє краще зрозуміти та оцінити незвичайні музичні інструменти, доповнюючи текстову інформацію та створюючи можливість для глибшого занурення у світ музики.	</p>
           
       </div>
        
      <iframe
        src={iframeUrl}
        style={{ width: '600px', height: '600px', borderRadius: '50%' }}
        allowFullScreen
        title="3D Model"
      ></iframe>
    </div>
      </div>
      
    </div>
  );
};

export default StartScreen;
