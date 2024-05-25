import React from 'react';
import { Link } from 'react-router-dom';
import img0 from '../assets/instruments/Kalimba/kalimba.jpg';
import img1 from '../assets/instruments/Kalimba/kalimba1.jpg';
import img2 from '../assets/instruments/Kalimba/kalimba2.webp';
import img4 from '../assets/instruments/Kalimba/kalimba2old.png';

const Kalimba: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/kd7KC3PaEaA";
  const iframeUrl = 'https://sketchfab.com/3d-models/painted-kalimba-a3a5829c7e5141f3a4ac46740bb440f3/embed';
  return (
    <div className='instrument-page'>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Калімба: Мелодія з глибин Африки</h1>
          <p>
            Калімба, також відома як мбіра, — це старовинний щипковий музичний інструмент, який зародився в Африці. Її багатий звук та портативність роблять її популярною як на континенті, так і в усьому світі.<Link to="/sources/source3" className='link-source'>[3]</Link>
          </p>

          <h2>Історія</h2>
          <p>
            Історія калімби сягає корінням у глибоку давнину. Археологічні знахідки свідчать про те, що подібні інструменти існували ще 3000 років тому. З часом калімба поширилася по всій Африці, еволюціонуючи в різні форми та розміри залежно від регіону. Її використовували в релігійних церемоніях, розповіданнях історій та соціальних зібраннях.
          </p>

          <h2>Механізм</h2>
          <p>
            Калімба має простий, але витончений дизайн. Вона складається з дерев'яного <Link to='/glossary/Резонатор' className='link-gloss'>резонатора</Link>, до якого кріпляться металеві язички різної довжини. Виконавець тримає калімбу в руках і щипає язички пальцями, створюючи мелодії та ритми. Завдяки різній довжині язичків, калімба видає різні ноти.
          </p>

          <h2>Різновиди</h2>
          <p>
            Існує безліч різновидів калімби, кожна з яких має свої унікальні характеристики. Деякі з найпоширеніших видів включають:
          </p>
          <ul>
            <li>
              <b>Мбіра:</b> Найбільша і найскладніша калімба, з 15-30 язичками. Її використовують у Зімбабве та Мозамбіку для складних музичних аранжувань.
            </li>
            <li>
              <b>Лікумбва:</b> Поширена в Кенії, має 8-10 язичків і простий дизайн.
            </li>
            <li>
              <b>Сансан:</b> Маленька калімба з 4-6 язичками, популярна в Західній Африці.
            </li>
          </ul>

          <h2>Цікаві факти</h2>
          <ul>
            <li>Калімбу часто називають "африканським піаніно" через її схожість з фортепіано.</li>
            <li>Калімба - це не лише музичний інструмент, але й важливий культурний символ для багатьох африканських народів.</li>
          </ul>

        </div>
        <div className='media-content'>
          <img src={img0} alt='Kalimba' />
          <img src={img1} alt='Kalimba' />
          <img src={img2} alt='Kalimba' />
        
          <img src={img4} alt='Kalimba' />
        </div>
      </div>
      <div className='videoContent'>
        <h2>Can't Help Falling In Love на калімбі</h2>
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

export default Kalimba;
