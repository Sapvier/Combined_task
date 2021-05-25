import {FETCH_USERS, SAVE_USERS} from "./types";

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
    }
}