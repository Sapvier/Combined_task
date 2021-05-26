import {FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_FETCHING, FETCH_USERS_SUCCESS, SAVE_USERS} from "./types";

const initialState = () => ({
    users: [],
    fetchStatus: 'idle'
})


export const usersReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case FETCH_USERS: {
            return {...state, users: [...action.payload]}
        }
        case SAVE_USERS: {
            return {...state, users: [...action.payload]}
        }
        case FETCH_USERS_FETCHING: {
            return {...state, fetchStatus: 'fetching'}
        }
        case FETCH_USERS_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case FETCH_USERS_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
    }
}