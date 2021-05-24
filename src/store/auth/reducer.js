import {SET_IS_AUTH} from "./types";


const initialState = () => {
    const localStore = JSON.parse(localStorage.getItem('isAuth')) === null ? false
        : JSON.parse(localStorage.getItem('isAuth'))

    return {
        isAuth: localStore,
        fetchStatus: 'idle'
    }
}


export const authReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SET_IS_AUTH: {
            return {
                ...state, isAuth: !state.isAuth
            }
        }
    }
}