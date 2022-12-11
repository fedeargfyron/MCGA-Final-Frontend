import React from 'react'
import styles from './button.module.css'
const Button = ({icon, content, color, background, onClick, type}) => {
  return ( 
    <button
    style={{
        color: color,
        background: background
    }}
    type={type}
    className={`${styles.button}`}
    onClick={onClick}
    >
        {icon}
        {content}
    </button>
  )
}

export default Button