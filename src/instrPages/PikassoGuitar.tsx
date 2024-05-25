import React from 'react';
import { Link } from 'react-router-dom';
import picassoGuitarImg1 from '../assets/instruments/pikasso_guitar/Pikasso-Guitar.jpg';
import picassoGuitarImg2 from '../assets/instruments/pikasso_guitar/metheny.webp';
import picassoGuitarImg3 from '../assets/instruments/pikasso_guitar/meth.webp';

const PikassoGuitar: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/Wp1wHZfZz9s";

  return (
    <div className='instrument-page'>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Гітара Пікассо: Унікальний музичний інструмент</h1>
          <p>
            Гітара Пікассо — це унікальний музичний інструмент, який відрізняється своєю незвичною конструкцією і розширеними можливостями для створення музики. Вона була розроблена американським майстром гітар Патом Матіно і названа на честь знаменитого художника Пабло Пікассо через її нестандартний, майже кубістичний дизайн.
          </p>

          <h2>Принцип дії гітари Пікассо</h2>
          <p>
            Гітара Пікассо має кілька відмінностей від традиційної гітари, які визначають її унікальність:
          </p>
          <ul>
            <li>Кількість <Link to='/glossary/Гриф' className='link-gloss'>грифів</Link>: Гітара Пікассо може мати від одного до чотирьох грифів, кожен з яких може бути налаштований по-різному.</li>
            <li>Кількість <Link to='/glossary/Струна' className='link-gloss'>струн</Link>: Загальна кількість струн може досягати 42, що дозволяє використовувати широкий спектр нот і гармоній.</li>
            <li>Резонансний корпус: Гітара має збільшений резонансний корпус, що підсилює звук і додає йому об’єму.</li>
          </ul>

          <h2>Поширення звуку в гітарі Пікассо</h2>
          <p>
            Звук у гітарі Пікассо створюється шляхом вібрації струн, як і в традиційних гітарах, але з урахуванням більшої кількості струн і грифів. Коли музикант грає на струнах, вібрації передаються через гриф до резонансного корпусу, який підсилює ці коливання і створює звук.
          </p>

          <h2>Діапазон звучання гітари Пікассо</h2>
          <p>
            Завдяки великій кількості струн і можливості налаштування кожного грифа на різні тональності, гітара Пікассо має дуже широкий діапазон звучання.
          </p>
        </div>
        <div className='media-content'>
          <img src={picassoGuitarImg1} alt='Picasso Guitar' />
          <img src={picassoGuitarImg2} alt='Picasso Guitar' />
          <img src={picassoGuitarImg3} alt='Picasso Guitar' />
        </div>
      </div>
      <div className='videoContent'>
        <h2>Pat Metheny Pikasso 42-string guitar</h2>
        <iframe 
          src={videoUrl} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default PikassoGuitar;
