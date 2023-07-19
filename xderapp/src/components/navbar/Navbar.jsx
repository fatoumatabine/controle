import React from 'react';
import { FaHome, FaUser, FaCog, FaSignInAlt } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaCog className="nav-icon" />
              Page
            </a>
            <ul className="navbar-submenu">
              <li>
                <a href="#" className="nav-link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Link 2
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaCog className="nav-icon" />
              Components
            </a>
            <ul className="navbar-submenu">
              <li>
                <a href="#" className="nav-link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Link 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link nav-button pink">
              <FaUser className="nav-icon" />
              S'enregistrer
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-button blue">
              <FaSignInAlt className="nav-icon" />
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
