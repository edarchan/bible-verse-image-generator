import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        <ul className={menuOpen ? `${styles.navList} show` : styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
