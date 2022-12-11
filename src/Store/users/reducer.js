import {
    GET_USER_ERROR,
    GET_USER_LOADING,
    GET_USER_SUCCESS    
} from './types'

const INITIAL_STATE = {
    data: null,
    isLoading: false,
    isError: false
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isError: false,
                isLoading: false
            };

        case GET_USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case GET_USER_ERROR: 
            return {
                ...state,
                isError: true,
                data: action.payload,
                isLoading: false
            }
        default: return state;
    }
}

export default usersReducer