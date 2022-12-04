import React from 'react'
import { Link } from 'react-router-dom';
import styles from './aside.module.css'
const Aside = () => {
  return (
    <aside className={styles.aside}>
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
            <Link to={'/'}>Home</Link>
            </li>
            <li className={styles.menuItem}>
            <Link to={'/products'}>Products</Link>
            </li>
        </ul>
    </aside>
  );
}

export default Aside