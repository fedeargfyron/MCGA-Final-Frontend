import {
    getProductsSuccess,
    getProductsError,
    getProductsLoading,
    deleteProductSuccess,
    deleteProductError,
    deleteProductLoading,
    getProductByIdLoading,
    getProductByIdSuccess,
    getProductByIdError,
    postProductLoading,
    postProductSuccess,
    postProductError,
    putProductSuccess,
    putProductLoading,
    putProductError
} from './actions'

export const getAllProducts = () => async (dispatch) => {
    dispatch(getProductsLoading());

    try {
        const response = await fetch('http://localhost:3001/products');
        const json = await response.json();
        if (response.status !== 200) 
            return dispatch(getProductsError(json));

        dispatch(getProductsSuccess(json));
    } catch (error) {
        dispatch(getProductsError({
            Success: false,
            Message: error.message
        }));
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    dispatch(deleteProductLoading());
    try {
        let data = JSON.parse(localStorage.getItem('user'));
        
        const response = await fetch(`http://localhost:3001/products/${id}`, 
        {
            method: 'DELETE',
            headers: {'Authorization': data.token}
        });
        const json = await response.json();
        if(response.status !== 200 )
            return dispatch(deleteProductError(json));

        
        dispatch(deleteProductSuccess(json));
    } catch (error) {
        dispatch(deleteProductError({
            Success: false,
            Message: error.message
        }));
    }
};

export const getProductById = (id) => async (dispatch) => {
    dispatch(getProductByIdLoading());
    try {
        let data = JSON.parse(localStorage.getItem('user'));
        const response = await fetch(`http://localhost:3001/products/byId/${id}`,{
            headers:{
                'Authorization': data.token
            }
        });
        const json = await response.json();
        if(response.status !== 200 ) 
            return getProductByIdError(json);

        dispatch(getProductByIdSuccess(json));
    } catch (error) {
        dispatch(getProductByIdError({
            Success: false,
            Message: error.message
        }));
    }
};

export const postProduct = (body) => async (dispatch) => {
    dispatch(postProductLoading());
    try {
        let data = JSON.parse(localStorage.getItem('user'));

        const response = await fetch('http://localhost:3001/products', { 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': data.token
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        const json = await response.json();
        if(response.status !== 200) 
            return dispatch(postProductError(json));

        dispatch(postProductSuccess(json));
    } catch (error) {
        dispatch(postProductError({
            Success: false,
            Message: error.message
        }));
    }
};

export const updateProduct = (id, body) => async (dispatch) => {
    dispatch(putProductLoading());
    try {
        let data = JSON.parse(localStorage.getItem('user'));
        const response = await fetch(`http://localhost:3001/products/${id}`, { 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': data.token
            },
            method: 'PUT',
            body: JSON.stringify(body)
        });
        const json = await response.json();
        if(response.status !== 200)
            return putProductError(json);

        dispatch(putProductSuccess(json));
    } catch (error) {
        dispatch(putProductError({
            Success: false,
            Message: error.message
        }));
    }
};