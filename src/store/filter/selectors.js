export const getTabs = (state) => state.sortReducer;

export const getCurrentSort = (state) => {
    let tabs = getTabs(state)
    let currentSort
    tabs.map(tab => {
        if (tab.isActive) currentSort = tab.sort
    })
    return currentSort
}
