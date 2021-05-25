import {SET_SORTED} from "./types";


export const setSorted = (payload) => {
    const sorted = payload.tabs.map(tab => tab.sort === payload.id ? {...tab, isActive: true}
        : {...tab, isActive: false}
    )
    return {
        type: SET_SORTED, payload: {
            tabs: sorted,
            id: payload.id,
            tickets: payload.tickets
        }
    }
}