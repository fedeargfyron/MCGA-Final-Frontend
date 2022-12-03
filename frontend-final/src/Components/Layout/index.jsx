import React from 'react'
import styles from './layout.module.css'
const Layout = ({children}) => {
  return (
    <div>
    {children}
      <div className={styles.bodyLayout}>
        {/*<Body children={children} />*/}
      </div>
    </div>
  );
}

export default Layout