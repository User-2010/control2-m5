import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className=" container header-container">
            <Link to="/" className="header-logo">Task Manager</Link>
            
            <nav className="header-nav">

                <Link to="/about" className="header-link">О приложении</Link>
            </nav>
        </header>
    );
};

export default Header;