import {
    GET_USER_ERROR,
    GET_USER_LOADING,
    GET_USER_SUCCESS    
} from './types'

export const getUser = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data,
    };
};

export const getUserLoading  = () => {
    return {
        type: GET_USER_LOADING,
    };
};


export const getUserError = (data) => {
    return {
        type: GET_USER_ERROR,
        payload: data
    };
};

export const logOutUser = () => {
    return {
        type: GET_USER_SUCCESS,
        payload: null
    };
};