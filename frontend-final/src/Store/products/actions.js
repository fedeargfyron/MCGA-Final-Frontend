import {
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_LOADING,
    DELETE_PRODUCT_SUCCESS
} from './types'

export const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
    };
};

export const getProductsLoading  = () => {
    return {
        type: GET_PRODUCTS_LOADING
    };
};


export const getProductsError = (data) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: data
    };
};

export const deleteProductSuccess = (data) => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: data,
    };
};

export const deleteProductLoading  = () => {
    return {
        type: DELETE_PRODUCT_LOADING
    };
};


export const deleteProductError = (data) => {
    return {
        type: DELETE_PRODUCT_ERROR,
        payload: data
    };
};

