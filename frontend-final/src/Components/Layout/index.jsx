import React from 'react'
import Aside from './Aside';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import styles from './layout.module.css'
const Layout = ({children}) => {
  return (
    <div>
        <Header />
      <div className={styles.row}>
        <Aside />
        <Body children={children} />
      </div>
        <Footer />
    </div>
  );
}

export default Layout