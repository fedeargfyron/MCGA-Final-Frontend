import React from 'react'
import styles from './input.module.css'
const Input = ({type, placeholder, requiredTags, register, inputName, errors}) => {
  return (<>
        <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...register(inputName, requiredTags)}
        />
        {errors && 
        <p className={styles.errorLabel}>
            { errors.type === 'required' ? 'Required'
            : errors.type === 'maxLength' ? 'Exceeded maximumn length'
            : errors.type === 'minLength' ? 'Invalid minimum length'
            : errors.type === 'min' ? 'Invalid quantity'
            : 'Invalid pattern'}
        </p>}
    </>
  )
}

export default Input