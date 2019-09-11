import axios from 'axios';
export const ADD_WELCOME = 'ADD_WELCOME';
export const ADD_WELCOME_SUCCESS = 'ADD_WELCOME_SUCCESS';
export const ADD_WELCOME_FAIL = 'ADD_WELCOME_FAIL';
export const GET_WELCOME = 'GET_WELCOME';
export const GET_WELCOME_SUCCESS = 'GET_WELCOME_SUCCESS';
export const GET_WELCOME_FAIL = 'GET_WELCOME_FAIL';

export const addWelcome = (author, content) => {
    return {
        type: ADD_WELCOME,
        payload: {
            author,
            content,
        },
    };
}

export const addWelcomeSuccess = (welcomeList) => {
    return {
        type: ADD_WELCOME_SUCCESS,
        payload: { welcomeList },
    }
}

export const addWelcomeFail = () => {
    return {
        type: ADD_WELCOME_FAIL,
    };
}

export const addWelcomeAsync = (author, content) => {
    return (dispatch) => {
        dispatch(addWelcome());
        return axios.post('https://jr-posts.herokuapp.com/v1/posts', {
            author: author,
            content: content,
        })
            .then(response => {
                dispatch(addWelcomeSuccess(response.data));
            }, error => {
                dispatch(addWelcomeFail());
            });
    }
}

export const getWelcome = () => {
    return {
        type: GET_WELCOME,
    };
}

export const getWelcomeSuccess = (welcomeList) => {
    return {
        type: GET_WELCOME_SUCCESS,
        payload: { welcomeList },
    }
}

export const getWelcomeFail = () => {
    return {
        type: GET_WELCOME_FAIL,
    };
}

export const getWelcomeAsync = () => {
    return (dispatch) => {
        dispatch(getWelcome());
        return axios.get('https://jr-posts.herokuapp.com/v1/posts')
            .then(response => {
                dispatch(getWelcomeSuccess(response.data));
            }, error => {
                dispatch(getWelcomeFail());
            });
    }
}