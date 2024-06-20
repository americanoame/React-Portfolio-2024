import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { motion } from 'framer-motion';

import './navbar.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`main-nav ${scrolled ? 'sticky-nav' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          Soft<span className="middle-logo">ware Engin</span>ner
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <motion.a href="#hero" className="nav-link" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>About</motion.a>
          <motion.a href="#project" className="nav-link" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>Projects</motion.a>
          <motion.a href="#contact" className="nav-link" whileHover={{ scale: 1.1 }} onClick={toggleMenu}>Contact</motion.a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
