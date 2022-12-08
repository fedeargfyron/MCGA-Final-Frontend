import { Outlet } from 'react-router-dom';
import Aside from '../Layout/Aside';
import styles from './sidebarLayout.module.css'
const SidebarLayout = () => (
  <div className={styles.row}>
    <Aside />
    <section className={styles.section}>
        <Outlet />
    </section>
  </div>
);

export default SidebarLayout