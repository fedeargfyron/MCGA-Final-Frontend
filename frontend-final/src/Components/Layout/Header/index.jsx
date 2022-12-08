import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logOutUser } from '../../../Store/users/actions';
import styles from './header.module.css'
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logOutUser());
    localStorage.removeItem("user");
    navigate('/login');
  }
  return (
    <header className={styles.header}>
        <div>
            <h1 className={styles.title}>Arrón Final</h1>
        </div>
        <button onClick={() => logOut()}>Log out</button>
    </header>
  );
}

export default Header