import {FETCH_ID_FAIL, FETCH_ID_FETCHING, FETCH_ID_SUCCESS, SET_IS_AUTH, SET_IS_OAUTH} from "./types";


const initialState = () => {
    const localStore = JSON.parse(localStorage.getItem('isAuth')) === null ? false
        : JSON.parse(localStorage.getItem('isAuth'))

    return {
        isAuth: localStore,
        fetchStatus: 'idle',
        clientId: null
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
        case SET_IS_OAUTH: {
            return {
                ...state,
                isAuth: true,
                clientId: action.payload
            }
        }
        case FETCH_ID_FETCHING: {
            return {...state, fetchStatus: 'fetching'}
        }
        case FETCH_ID_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case FETCH_ID_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
    }
}