export const sortArray = (param = 'id', users) => {
    return [...users].sort((a, b) => {
        if (param === '#') {
            return a[param] - b[param];
        } else if (param === 'name') {
            return (a[param].toLowerCase() > b[param].toLowerCase()) ? 1 : ((b[param].toLowerCase() > a[param].toLowerCase()) ? -1 : 0)
        } else if (param === 'city') {
            return (a.address[param].toLowerCase() > b.address[param].toLowerCase()) ? 1 : ((b.address[param].toLowerCase() > a.address[param].toLowerCase()) ? -1 : 0)
        } else if (param === "company") {
            return (a[param].name.toLowerCase() > b[param].name.toLowerCase()) ? 1 : ((b[param].name.toLowerCase() > a[param].name.toLowerCase()) ? -1 : 0)
        }
    })
}