import {
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_LOADING,
    DELETE_PRODUCT_SUCCESS
} from './types'

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
    deleteIsLoading: false,
    deleteIsError: false,
    deleteData: null
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
        default: return state;
    }
}

export default productsReducer