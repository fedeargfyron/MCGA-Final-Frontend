import React, { useEffect } from 'react'
import styles from './login.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import InputContainer from '../../Components/Shared/InputContainer'
import Input from '../../Components/Shared/Input'
import Button from '../../Components/Shared/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../Store/users/thunks'


const Login = () => {
    let userStorage = localStorage.getItem("user");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, isError, data } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(userStorage)
            return navigate('/');
    }, [userStorage, navigate])
    

    const onSubmit = (e) => {
        let body = {
            "email": e.email,
            "pass": e.password
        };

        dispatch(getUsers(body));
        if(!isLoading && !isError && data){
            localStorage.setItem("user", JSON.stringify(data.data));
            let path = `/`
            navigate(path);
        }
    }

    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <InputContainer label={'Email'}>
                    <Input
                        register={register}
                        inputName={'email'}
                        requiredTags={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }}
                        placeholder={'Email'}
                        errors={errors.email}
                    />
                </InputContainer>
                <InputContainer label={'Password'}>
                    <Input
                        register={register}
                        inputName={'password'}
                        requiredTags={{ required: true }}
                        placeholder={'Password'}
                        type='password'
                        errors={errors.password}
                    />
                </InputContainer>
                <Button
                    content='Log In' 
                    background='#28a745'
                    type='submit'
                 />
            </form>
        </div>
    )
}

export default Login