import {
    getProductsSuccess,
    getProductsError,
    getProductsLoading,
    deleteProductSuccess,
    deleteProductError,
    deleteProductLoading
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
        dispatch(getProductsError(error));
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