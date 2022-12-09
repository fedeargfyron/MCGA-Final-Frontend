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

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
    deleteIsLoading: false,
    deleteIsError: false,
    deleteData: null,
    getByIdIsLoading: false,
    getByIdIserror: false,
    product: null,
    postIsLoading: false,
    postIserror: false,
    postData: null,
    putIsLoading: false,
    putIserror: false,
    putData: null
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isError: false,
                isLoading: false
            };

        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case GET_PRODUCTS_ERROR: 
            return {
                ...state,
                isError: true,
                data: action.payload,
                isLoading: false
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                deleteData: action.payload,
                deleteIsError: false,
                deleteIsLoading: false
            };

        case DELETE_PRODUCT_LOADING:
            return {
                ...state,
                deleteIsLoading: true,
            }

        case DELETE_PRODUCT_ERROR: 
            return {
                ...state,
                deleteIsError: true,
                deleteData: action.payload,
                deleteIsLoading: false
            }
        case GET_PRODUCT_BYID_LOADING:
            return {
                ...state,
                getByIdIsLoading: true
            };
        case GET_PRODUCT_BYID_SUCCESS:
            return {
                ...state,
                getByIdIsLoading: false,
                getByIdIserror: false,
                product: action.payload
            };
        case GET_PRODUCT_BYID_ERROR:
            return {
                ...state,
                getByIdIsLoading: false,
                getByIdIserror: true,
                product: action.payload
            };
        case POST_PRODUCT_LOADING:
            return {
                ...state,
                postIsLoading: true
            };
        case POST_PRODUCT_SUCCESS:
            return {
                ...state,
                postIsLoading: false,
                postIserror: false,
                postData: action.payload
            };
        case POST_PRODUCT_ERROR:
            return {
                ...state,
                postIsLoading: false,
                postIserror: true,
                postData: action.payload
            };
        case PUT_PRODUCT_LOADING:
            return {
                ...state,
                putIsLoading: true
            };
        case PUT_PRODUCT_SUCCESS:
            return {
                ...state,
                putIsLoading: false,
                error: false,
                putData: action.payload
            };
        case PUT_PRODUCT_ERROR:
            return {
                ...state,
                putIsLoading: false,
                error: true,
                putData: action.payload
            };
        default: return state;
    }
}

export default productsReducer