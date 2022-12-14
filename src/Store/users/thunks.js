import {
    getUser,
    getUserError,
    getUserLoading
} from './actions'

export const getUsers = (data) => async (dispatch) => {
    dispatch(getUserLoading());
    try {
        const response = await fetch('https://mcga-final-backend-v2f-m5xtgxipz-fedeargfyron.vercel.app/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        const json = await response.json();
        if (response.status !== 200) 
            return dispatch(getUserError(json));

        dispatch(getUser(json));
        localStorage.setItem("user", JSON.stringify(json.data));
    } catch (error) {
        dispatch(getUserError({
            Success: false,
            Message: error.message
        }));
    }
}