import { ADD_WELCOME_SUCCESS, GET_WELCOME_SUCCESS } from "../actions/welcomeActions";

const defaultState = [
    // {id:1, author: 'Nick', content:'I am a teacher' },
    // {id:2, author: 'Tim', content:'I am a student' },
    // {id:3, author: 'Sam', content:'I am a student' },
];

const welcome = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_WELCOME_SUCCESS:
            return state.concat({author: action.payload.author, content: action.payload.content});
        case GET_WELCOME_SUCCESS:
            return action.payload.welcomeList;
            default: return state;
    }
}


export default welcome;