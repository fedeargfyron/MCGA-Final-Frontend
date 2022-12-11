import {
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_LOADING,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCT_BYID_ERROR,
    GET_PRODUCT_BYID_LOADING,
    GET_PRODUCT_BYID_SUCCESS,
    POST_PRODUCT_ERROR,
    POST_PRODUCT_LOADING,
    POST_PRODUCT_SUCCESS,
    PUT_PRODUCT_ERROR,
    PUT_PRODUCT_LOADING,
    PUT_PRODUCT_SUCCESS
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

export const getProductByIdLoading = () => {
    return {
      type: GET_PRODUCT_BYID_LOADING
    };
};

export const getProductByIdSuccess = (data) => {
    return {
        type: GET_PRODUCT_BYID_SUCCESS,
        payload: data
    };
};

export const getProductByIdError = (data) => {
    return {
        type: GET_PRODUCT_BYID_ERROR,
        payload: data
    };
};

export const postProductLoading = () => {
    return {
      type: POST_PRODUCT_LOADING
    };
};

export const postProductSuccess = (data) => {
    return {
        type: POST_PRODUCT_SUCCESS,
        payload: data
    };
};

export const postProductError = (data) => {
    return {
        type: POST_PRODUCT_ERROR,
        payload: data
    };
};

export const putProductLoading = () => {
    return {
      type: PUT_PRODUCT_LOADING
    };
};

export const putProductSuccess = (data) => {
    return {
        type: PUT_PRODUCT_SUCCESS,
        payload: data
    };
};

export const putProductError = (data) => {
    return {
        type: PUT_PRODUCT_ERROR,
        payload: data
    };
}

