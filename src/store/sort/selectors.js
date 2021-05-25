export const getFilter = state => state.filterReducer

export const getCurrentFilter = (state) => {
    let filter = getFilter(state)
    let currentFilter
    filter.map(item => {
        if (item.isActive) currentFilter = item.id
    })
    return currentFilter
}


