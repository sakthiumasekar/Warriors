import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <header>
            
        <img src={logo} className="logo" alt="logo" />
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..."/>
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
            </div>
            <nav>
                <ul>
                    <li><i className="fas fa-bell"></i></li>
                    <li><i className="fas fa-shopping-cart"></i></li>
                    <li><i className="fas fa-user"></i></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
