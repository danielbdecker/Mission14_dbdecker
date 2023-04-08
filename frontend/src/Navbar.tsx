import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

//navbar that appears on all pages

function Navbar() {
  return (
    <div className={styles['topnav']}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movie Collection</Link>
          </li>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
