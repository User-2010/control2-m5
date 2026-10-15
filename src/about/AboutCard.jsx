import React from 'react';

const AboutCard = ({ number, title, text }) => {
    return (
        <div className="value-card">
            <span className="value-number">{number}</span>
            <h3 className="value-card-title">{title}</h3>
            <p className="value-card-text">{text}</p>
        </div>
    );
};

export default AboutCard;