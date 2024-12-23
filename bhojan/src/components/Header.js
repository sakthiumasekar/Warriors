import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

import { Link } from "react-router-dom";
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
                    <li><Link to="/"><i className="fas fa-home"></i></Link></li>
                    <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
                    <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
