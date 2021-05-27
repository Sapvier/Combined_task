import {SAVE_MOVIE, SET_CURRENT_DAY, SET_DATES, SET_IS_AVAILABLE, SET_IS_CURRENT} from "./types";
import {getDate} from "date-fns";

const initialState = () => {
    const localStore = JSON.parse(localStorage.getItem('isAuth'))

    if (localStore === null) {
        return {
            movie: {},
            dates: [],
            day: {},
            fetchStatus: 'idle'
        }
    } else return {
        ...localStore.bookingReducer
    }
}


export const bookingReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_MOVIE: {
            return {...state, movie: action.payload}
        }
        case SET_DATES: {
            return {...state, dates: action.payload, day: action.payload.find(item => item.isCurrent === true)}
        }
        case SET_IS_CURRENT: {
            return {
                ...state, dates: state.dates.map(item => {
                    if (getDate(Date.parse(item.date)) === getDate(Date.parse(action.payload))) {
                        return {...item, isCurrent: true}
                    } else return {...item, isCurrent: false}
                })
            }
        }
        case SET_CURRENT_DAY : {
            return {...state, day: state.dates.find(item => item.isCurrent === true)}
        }
        case SET_IS_AVAILABLE: {
            return {
                ...state, dates: state.dates.map(item => {
                    if (item.number === action.payload.number)
                        return {
                            ...item,
                            slots: action.payload.result
                        }
                    else return item
                }),
                day: {...state.day, slots: action.payload.result}
            }
        }
    }
}