import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="about-hero-content">
            <p className="about-subtitle">
                Наше приложение помогает организовывать задачи, следить за прогрессом и достигать целей каждый день — легко, удобно и без лишнего хаоса.
            </p>
            <Link to="/" className="about-to-tasks-btn">
                перейти к задачам
            </Link>
        </div>
    );
};

export default Info;