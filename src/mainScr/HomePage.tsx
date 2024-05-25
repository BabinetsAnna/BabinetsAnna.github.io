import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lottie from "lottie-web";
import animationData from "../assets/animation/miniman.json"; 
import '../styles/HomePage.css';
import soundFile from '../assets/sound.mp3';

const HomePage: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      // Видаляємо попередню анімацію, якщо вона вже є
      container.current.innerHTML = '';

      // Завантажуємо нову анімацію
      lottie.loadAnimation({
        container: container.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
        renderer: "svg",
      });
    }
  }, []);

  // Функція для відтворення звуку
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div className="home-page">
      <div ref={container} id="animation-container"></div>
      <div className="home-div">
        <h1>Мультимедійна енциклопедія незвичайних музичних інструментів світу</h1>
        <p>Ласкаво просимо до енциклопедії! Тут ви знайдете найцікавіші і найнеочікуваніші музичні інструменти з різних країн і культур світу.</p>
      
        <Link to="/start" className="start-journey" onClick={playSound}>Почніть свою подорож зараз!</Link>
      </div>
    </div>
  );
};

export default HomePage;
