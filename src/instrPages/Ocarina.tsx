import React from 'react';
import { Link } from 'react-router-dom';
import img0 from '../assets/instruments/ocarina/ocarina.webp';
import img1 from '../assets/instruments/ocarina/ocarina2.jpg';
import img2 from '../assets/instruments/ocarina/ocarina3.webp';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Ocarina: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/Nad5AJaIcBI";
  const iframeUrl = 'https://sketchfab.com/3d-models/ocarina-of-time-40ab5c7438374647b1c86245019f73aa/embed';
  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Окарина: Древній інструмент зі східних земель</h1>
          <p>
          Окарина - це дуже цікавий музичний інструмент з давньою історією. Він виглядає як невеликий кульовидний або овальний флейтоподібний інструмент з отворами для пальців та одним або кількома отворами сверху. Окарина може бути виготовлена з різних матеріалів, таких як кераміка, глина, пластик або дерево.
          </p>

          <h2>Історія</h2>
          <p>
          Окарина належить до дуже давнього сімейства інструментів, якому, як вважають, понад 12 000 років. Інструменти типу окарини мали особливе значення в китайській та <Link to='/glossary/Мезоамериканська культура' className='link-gloss'>мезоамериканській культурах</Link>. Для китайців цей інструмент відіграв важливу роль у їхній довгій історії пісень і танців. 
          У XX столітті окарина отримала певну популярність у країнах Європи та Північної Америки, особливо серед любителів народної та фольклорної музики. Вона також була використана в <Link to='/glossary/Саундтреки' className='link-gloss'>саундтреках</Link> до деяких відеоігор та кінофільмів.<Link to="/sources/source5" className='link-source'>[5]</Link>

        Сьогодні окарину можна знайти у різних варіаціях і матеріалах, а її популярність продовжує зростати як серед музикантів, так і серед любителів музики.
          </p>

          <h2>Механізм</h2>
          <p>
          Окарина виробляє звук за допомогою повітря, яке музикант видуває через отвори, покриваючи їх пальцями, щоб утворити різні ноти. Він належить до класу аерофонів і має просту конструкцію, але водночас може бути досить складним у виконанні через технічні особливості гри на ньому.
          </p>

          <h2>Різновиди</h2>
          <p>
            Існують різні типи окарин, включаючи традиційні керамічні окарини та сучасні версії з інших матеріалів.
          </p>

          <h2>Цікаві факти</h2>
          <ul>
            <li>Окарина часто використовується у <Link to='/glossary/Фольклор' className='link-gloss'>фольклорних</Link> виставах та музичних концертах.</li>
            <li>Деякі окарини мають вбудовані додаткові отвори, що дозволяють виконувати більш складні мелодії.</li>
          </ul>

         
        </div>
        <div className='media-content'>
          <img src={img0} alt='Ocarina' />
          <img src={img1} alt='Ocarina' />
          <img src={img2} alt='Ocarina' />
          
        </div>
      </div>
      <div className='videoContent'>
        <h2>Song of Time on Ocarina</h2>
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

export default Ocarina;
