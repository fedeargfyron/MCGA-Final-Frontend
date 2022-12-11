import React from 'react'
import styles from './inputContainer.module.css'
const InputContainer = ({children, label}) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            {children}
        </div>
    )
}

export default InputContainer