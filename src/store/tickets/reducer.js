import {
    FETCH_TICKETS_FAIL,
    FETCH_TICKETS_FETCHING,
    FETCH_TICKETS_SUCCESS,
    SAVE_ID, SAVE_SLICED_TICKETS,
    SAVE_SORTED_TICKETS,
    SAVE_TICKETS
} from "./types";

const initialState = () => ({
    tickets: [],
    slicedTickets: [],
    stop: false,
    searchId: null,
    fetchStatus: 'idle'
})


export const ticketsReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_TICKETS: {
            return {...state, tickets: [...action.payload.tickets], stop: action.payload.stop}
        }
        case SAVE_SORTED_TICKETS: {
            return {...state, tickets: [...action.payload]}
        }
        case SAVE_SLICED_TICKETS: {
            return {...state, slicedTickets: [...action.payload]}
        }
        case SAVE_ID: {
            return {...state, searchId: action.payload.searchId}
        }
        case FETCH_TICKETS_FETCHING: {
            return {...state, fetchStatus: 'fetching'}
        }
        case FETCH_TICKETS_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case FETCH_TICKETS_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
    }
}