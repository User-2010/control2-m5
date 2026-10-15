import React from 'react';
import Info from '../about/Info';
import UiAbout from '../about/UiAbout';
import AboutCard from '../about/AboutCard';


import imgAbout from '../img/imgAbout.png'; 

const valuesData = [
    {
        number: '01.',
        title: 'Просто и эффективно',
        text: 'Наше приложение объединяет удобство и мощный функционал: создавайте задачи, отмечайте выполненные и управляйте своим временем.'
    },
    {
        number: '02.',
        title: 'Умный трекинг',
        text: 'Система отслеживания помогает видеть прогресс, контролировать привычки и структурировать день в одном месте.'
    },
    {
        number: '03.',
        title: 'Современный дизайн',
        text: 'Интерфейс, который идеально смотрится и работает на любом устройстве — понятно, аккуратно и приятно для глаз.'
    },
    {
        number: '04.',
        title: 'Персональные настройки',
        text: 'Гибкие категории, напоминания и приоритеты — настройте приложение так, как удобно именно вам.'
    }
];

const AboutPage = () => {
    return (
        <div className="about-container">
            {/* Верхний блок: Текст слева, картинка справа */}
            <div className="about-hero">
                <Info />
                <div className="about-hero-image-container">
                    <img src={imgAbout} alt="О приложении" className="about-hero-img" />
                </div>
            </div>

            {/* Блок «Наши ценности» */}
            <div className="about-values-section">
                <UiAbout />

                <div className="values-grid" style={{ marginTop: '32px' }}>
                    {valuesData.map((item, index) => (
                        <AboutCard 
                            key={index}
                            number={item.number}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;