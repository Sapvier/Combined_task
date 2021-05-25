import {SET_CHECKED} from "./types";


export const setChecked = (payload) => {
    const filtered = payload.checkboxes.map(checkbox => checkbox.id === payload.id ? {...checkbox, isActive: !checkbox.isActive}
        : {...checkbox, isActive: false}
    )
    return {
        type: SET_CHECKED, payload: {
            checkboxes: filtered,
            id: payload.id,
            tickets: payload.slicedTickets
        }
    }
}

