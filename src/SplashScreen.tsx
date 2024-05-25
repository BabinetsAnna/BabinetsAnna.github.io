import React, { useEffect, useRef } from 'react';
import './styles/SplashScreen.css'; 
import logo from './assets/splashlogo.jpg';
import lottie from "lottie-web";
import animationData from "./assets/animation/downloading.json";

const SplashScreen: React.FC = () => {
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
    
    return (
        <div className="splash-screen">
            <div className="up-cont">
            <div className="logo-container">
                <img src={logo} alt="Логотип кафедри" />
            </div>
            <div className="splash-content">
                <h1>Кафедра комп'ютерних систем та мереж</h1>
                <h2>Мультимедійні засоби в комп’ютерних системах</h2>
                <h3>Мультимедійна енциклопедія "Незвичайні музичні інструменти світу"</h3>
                <p>Бабінець А.С.      2024</p>
                
            </div>
            </div>
            <div ref={container} id="animation-container"></div>
        </div>
        
    );
};

export default SplashScreen;
