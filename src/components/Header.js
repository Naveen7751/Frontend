import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Add faTimes for the close icon
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate('');

  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.hackathon}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <strong><a href="#">Hackathon</a></strong>
        </div>
        <div className={styles.rightLinks}>
          <div className={styles.homeLink}>
            <a href="#" onClick={scrollToTop}>Home</a>
          </div>
          <div className={styles.loginRegister}>
            <button onClick={()=>navigate('/login')}>Login/Register</button>
          </div>
           {/* {isLoggedIn ? (
            <div className={styles.loginRegister}>
              <button onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <div className={styles.loginRegister}>
            <button onClick={()=>navigate('/login')}>Login/Register</button>
          </div>
          )} */}
        </div>
      </nav>
      <div className={styles.mobileMenu} style={{ width: showMenu ? '25%' : '0' }}>
        <div className={styles.closeButton} onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <a href="#details" onClick={closeMenu}>Details</a>
        <a href="#eligibility" onClick={closeMenu}>Eligibility</a>
        <a href="#date" onClick={closeMenu}>Date and Timing</a>
        <a href="#criteria" onClick={closeMenu}>Judging Criteria</a>
        <a href="#panelists" onClick={closeMenu}>Panelists</a>
        <a href="#prizes" onClick={closeMenu}>Prizes</a>
      </div>
    </header>
  );
};

export default Header;