import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <h1 className={styles.title}>Arrón Final</h1>
        </div>
        <div>Login</div>
    </header>
  );
}

export default Header