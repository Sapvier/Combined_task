import {FETCH_USER_FAIL, FETCH_USER_FETCHING, FETCH_USER_SUCCESS, SAVE_USER} from "./types";


const initialState = () => ({
    user: {},
    fetchStatus: 'idle'
})


export const detailedUserReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_USER: {
            return {...state, user: action.payload}
        }
        case FETCH_USER_FETCHING: {
            return {...state, fetchStatus: 'fetching'}
        }
        case FETCH_USER_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case FETCH_USER_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
    }
}