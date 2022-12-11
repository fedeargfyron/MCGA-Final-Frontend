import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../../../Store/users/actions';
import Button from '../../Shared/Button';
import styles from './header.module.css'
const Header = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logIn = () => {
    navigate('/login');
  }

  const logOut = () => {
    dispatch(logOutUser());
    localStorage.removeItem("user");
    navigate('/login');
  }
  return (
    <header className={styles.header}>
        <div>
            <Link to={'/'} className={styles.headerTitle}><h1>Arrón Final</h1></Link>
        </div>
        { user ? <Button
          onClick={logOut}
          background='none'
          color='white'
          content='Log out'
          />
        : <Button
        onClick={logIn}
        background='none'
        color='white'
        content='Log in'
        />}
        
    </header>
  );
}

export default Header