import React, { useEffect, useState } from 'react'
import styles from './login.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import InputContainer from '../../Components/Shared/InputContainer'
import Input from '../../Components/Shared/Input'
import Button from '../../Components/Shared/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../Store/users/thunks'
import InformationModal from '../../Components/Shared/InformationModal'
import { CircularProgress } from '@mui/material'

const Login = () => {
    const [dispatchFlag, setDispatchFlag] = useState(false);
    const [open, setOpen] = useState(false);
    let userStorage = localStorage.getItem("user");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, isError, data } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(userStorage)
            return navigate('/');
    }, [userStorage, navigate])


    useEffect(() => {
        if(!dispatchFlag || isLoading)
            return;

        if(isError)
        setOpen(true);
    }, [isLoading, isError, dispatchFlag]);

    const onSubmit = (e) => {
        let body = {
            "email": e.email,
            "pass": e.password
        };
        
        dispatch(getUsers(body));

        setDispatchFlag(true);

        if(!isLoading && !isError && localStorage.getItem('user')){
            navigate('/');
        }
    }
    
    return (
        <div className={styles.login}>
            { isLoading && 
            <InformationModal
                Message={ <CircularProgress /> }
                open={true}
            />}
            { isError && 
            <InformationModal
                Message={data.Message}
                Title='Error in login!'
                open={open}
                setOpen={setOpen}
            />}
            
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.title}>Login</h2>
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