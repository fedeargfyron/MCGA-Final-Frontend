import {
    getUser,
    getUserError,
    getUserLoading
} from './actions'

export const getUsers = (data) => async (dispatch) => {
    dispatch(getUserLoading());
    try {
        const response = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const json = await response.json();
        if (response.status !== 200) 
            return dispatch(getUserError(json));

        dispatch(getUser(json));
    } catch (error) {
        dispatch(getUserError(error));
    }
}