 import React from 'react';
import { Link } from 'react-router-dom';
import img0 from '../assets/instruments/kazoo/kazu.jpg';
import img1 from '../assets/instruments/kazoo/kazu2.jpg';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Kazoo: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/3N7Ie3IVGtU";
  const iframeUrl = 'https://sketchfab.com/3d-models/metal-kazoo-74cb647e8101480682c8245be57de65e/embed';

  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Казу: Інструмент, що змінює голос</h1>
          <p>
            Казу — це музичний інструмент, що змінює звук голосу. Виконавець співає або говорить у казу, і звук змінюється за допомогою <Link to='/glossary/Мембрана' className='link-gloss'>мембрани</Link> з цигаркового паперу.
          </p>

          <h2>Історія</h2>
          <p>
            Казу має довгу історію і використовується в різних культурах. Сучасна форма казу була розроблена у США в 1840-х роках. З того часу казу стало популярним інструментом у різних жанрах музики.
          </p>

          <h2>Механізм</h2>
          <p>
            Музичний інструмент казу є простим <Link to='/glossary/Аерофон' className='link-gloss'>аерофоном</Link>, який складається з кількох основних частин:
          </p>
          <ul>
            <li>
              <b>Корпус:</b> Основна частина казу, яка зазвичай має трубчасту форму. Він може бути виготовлений з різних матеріалів, таких як метал, пластик або дерево.
            </li>
            <li>
              <b>Мембрана:</b> Тонка плівка або мембрана, яка розташована в спеціальному отворі на корпусі. Мембрана є ключовою частиною, що створює характерний звук казу. Вона може бути виготовлена з воскового паперу або пластику.
            </li>
            <li>
              <b>Резонатор:</b> Частина інструмента, яка містить мембрану. Резонатор може бути інтегрованим в корпус або бути окремою деталлю, що кріпиться до корпусу.<Link to="/sources/source9" className='link-source'>[9]</Link>
            </li>
            <li>
              <b>Отвір для вдування (<Link to='/glossary/Мундштук' className='link-gloss'>мундштук</Link>):</b> Це місце, куди музикант вдуває повітря. Звук утворюється не від самого вдування, а від гудіння або мугикання в отвір, що змушує мембрану вібрувати.
            </li>
          </ul>
          <p>
            Форма та матеріал корпусу, а також натяг мембрани можуть впливати на тон і якість звуку казу. Використання цього інструмента досить просте, і він популярний у різних музичних жанрах завдяки своєму специфічному, веселому звучанню.
          </p>

          <h2>Різновиди</h2>
          <p>
            Існує кілька різновидів казу, кожен з яких має свої особливості:
          </p>
          <ul>
            <li>
              <b>Класичне казу:</b> Виготовлене з металу або пластику, зазвичай має стандартну форму.
            </li>
            <li>
              <b>Електронне казу:</b> Оснащене мікрофоном і підсилювачем для підключення до звукових систем.
            </li>
          </ul>

          <h2>Цікаві факти</h2>
          <ul>
            <li>Казу часто використовують у дитячих іграх та навчанні музики.</li>
            <li>Казу — це один з небагатьох музичних інструментів, який може змінювати тембр голосу виконавця.</li>
          </ul>

          
        </div>
        <div className='media-content'>
          <img src={img0} alt='Kazoo' />
          <img src={img1} alt='Kazoo' />
        </div>
      </div>
      <div className='videoContent'>
        <h2>Як грати на казу</h2>
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

export default Kazoo;
