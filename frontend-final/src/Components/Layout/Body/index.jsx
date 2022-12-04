import React from 'react'
import styles from './body.module.css'
const Body = ({children}) => {
  return (
    <section className={styles.section}>
        {children}
    </section>
  );
}

export default Body